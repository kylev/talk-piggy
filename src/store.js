import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function createSpeaker(name) {
  return {
    id: Math.random().toString(),
    name,
    isSpeaking: false
  };
}

function findSpeakerIndex(speakers, id) {
  return speakers.findIndex(e => e.id === id);
}

export default new Vuex.Store({
  state: {
    speakers: [createSpeaker("Steven"), createSpeaker("Nick")],
    tickSeconds: 0,
    tickTimer: null
  },
  mutations: {
    addSpeaker(state, name) {
      state.speakers.push(createSpeaker(name));
    },
    toggleSpeaking(state, id) {
      const i = findSpeakerIndex(state.speakers, id);

      if (i >= 0) {
        const s = state.speakers[i];
        state.speakers.splice(i, 1, { ...s, isSpeaking: !s.isSpeaking });
      }
    },
    incrementTick(state) {
      state.tickSeconds++;
    }
  },
  actions: {
    startTimer({ commit, state }) {
      state.tickTimer = setInterval(() => commit("incrementTick"), 1000);
    },
    stopTimer({ state }) {
      clearInterval(state.tickTimer);
      state.tickTimer = null;
    }
  }
});
