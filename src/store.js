import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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

export default new Vuex.Store({
  state: {
    speakers: [createSpeaker("Steven"), createSpeaker("Nick")],
    tickSeconds: 0,
    tickTimer: null,
    crosstalkSeconds: 0
  },
  mutations: {
    addSpeaker(state, name) {
      state.speakers.push(createSpeaker(name));
    },
    removeSpeaker(state, id) {
      state.speakers = state.speakers.filter(item => item.id !== id);
    },
    toggleSpeaking(state, id) {
      const i = findSpeakerIndex(state.speakers, id);

      if (i >= 0) {
        const s = state.speakers[i];
        Vue.set(state.speakers, i, { ...s, isSpeaking: !s.isSpeaking });
      }
    },
    incrementTick(state) {
      const updateCount = state.speakers.reduce((accum, item) => {
        if (item.isSpeaking) {
          item.speakingSeconds++;
          return accum + 1;
        } else {
          return accum;
        }
      }, 0);

      if (updateCount > 1) {
        state.crosstalkSeconds++;
      }
      state.tickSeconds++;
    }
  },
  actions: {
    startTalking({ commit, dispatch }, payload) {
      dispatch("startTimer");
      commit("toggleSpeaking", payload);
    },
    startTimer({ commit, state }) {
      if (!state.tickTimer) {
        state.tickTimer = setInterval(() => commit("incrementTick"), 1000);
      }
    },
    stopTimer({ state }) {
      clearInterval(state.tickTimer);
      state.tickTimer = null;
    }
  }
});
