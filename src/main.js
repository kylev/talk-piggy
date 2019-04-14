import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: "UA-627907-4",
  debug: {
    sendHitTask: process.env.NODE_ENV === "production"
  }
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  mounted() {
    this.$ga.page(process.env.BASE_URL);
  }
}).$mount("#app");
