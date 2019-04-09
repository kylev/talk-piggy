import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function createUser(name) {
  return {
    id: Math.random().toString(),
    name
  };
}

export default new Vuex.Store({
  state: {
    speakers: [createUser("Steven"), createUser("Nick")],
    tickSeconds: 0,
    tickTimer: null
  },
  mutations: {
    addSpeaker(state, name) {
      state.speakers.push(createUser(name));
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
