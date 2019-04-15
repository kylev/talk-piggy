import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { event } from "vue-analytics";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    speakers: state.speakers,
    tickSeconds: state.tickSeconds,
    crosstalkSeconds: state.crosstalkSeconds
  })
});

function createSpeaker(name) {
  return {
    id: Math.random().toString(),
    name,
    isSpeaking: false,
    speakingSeconds: 0
  };
}

function findSpeakerIndex(speakers, id) {
  return speakers.findIndex(e => e.id === id);
}

function initialState() {
  return {
    speakers: [createSpeaker("Alice"), createSpeaker("Bob")],
    tickSeconds: 0,
    tickTimer: null,
    tickLast: new Date(),
    crosstalkSeconds: 0
  };
}

export default new Vuex.Store({
  state: initialState,
  plugins: [vuexLocal.plugin],
  mutations: {
    resetState(state) {
      clearInterval(state.tickTimer);
      // acquire initial state
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },
    resetSpeakerTimes(state) {
      state.speakers.map(s => {
        s.speakingSeconds = 0;
      });
    },
    resetTotalTimes(state) {
      state.tickSeconds = 0;
      state.crosstalkSeconds = 0;
    },
    addSpeaker(state, name) {
      state.speakers.push(createSpeaker(name));
      event("TalkPiggy", "add_speaker");
    },
    editSpeakerName(state, { id, name }) {
      const i = findSpeakerIndex(state.speakers, id);

      if (i >= 0) {
        const s = state.speakers[i];
        Vue.set(state.speakers, i, { ...s, name });
      }
    },
    removeSpeaker(state, { id }) {
      state.speakers = state.speakers.filter(item => item.id !== id);
    },
    toggleSpeaking(state, { id }) {
      const i = findSpeakerIndex(state.speakers, id);

      if (i >= 0) {
        const s = state.speakers[i];
        Vue.set(state.speakers, i, { ...s, isSpeaking: !s.isSpeaking });
      }
    },
    setTickLast(state, date) {
      state.tickLast = date;
    },
    incrementTick(state, newTime) {
      const elapsed = Math.round((newTime - state.tickLast) / 1000);
      const updateCount = state.speakers.reduce((accum, item) => {
        if (item.isSpeaking) {
          item.speakingSeconds += elapsed;
          return accum + 1;
        } else {
          return accum;
        }
      }, 0);

      if (updateCount > 1) {
        state.crosstalkSeconds += elapsed;
      }
      state.tickLast = new Date();
      state.tickSeconds += elapsed;
    }
  },
  actions: {
    startTalking({ commit, dispatch }, payload) {
      dispatch("startTimer");
      commit("toggleSpeaking", payload);
    },
    startTimer({ commit, state }) {
      if (!state.tickTimer) {
        commit("setTickLast", new Date());
        state.tickTimer = setInterval(() => {
          commit("incrementTick", new Date());
        }, 1000);
        event("TalkPiggy", "start_timer");
      }
    },
    stopTimer({ state }) {
      if (state.tickTimer) {
        clearInterval(state.tickTimer);
        state.tickTimer = null;
        event("TalkPiggy", "stop_timer");
      }
    }
  }
});
