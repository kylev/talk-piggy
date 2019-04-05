import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speakers: [{ name: "Steven" }, { name: "Nick" }]
  },
  mutations: {},
  actions: {}
});
