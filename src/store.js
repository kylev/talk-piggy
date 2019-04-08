import Buefy from "buefy";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(Buefy);

export default new Vuex.Store({
  state: {
    speakers: [{ name: "Steven" }, { name: "Nick" }]
  },
  mutations: {
    addSpeaker(state, name) {
      state.speakers.push({ name });
    }
  },
  actions: {}
});
