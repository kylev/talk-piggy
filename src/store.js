import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speakers: [{ name: "Steven" }, { name: "Nick" }],
    tickSeconds: 0,
    tickTimer: null
  },
  mutations: {
    addSpeaker(state, name) {
      state.speakers.push({ name });
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
