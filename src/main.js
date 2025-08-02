import { createBootstrap } from 'bootstrap-vue-next';
import { createPinia } from 'pinia';
import { createApp } from "vue";
import { configure as configureGTag } from "vue-gtag";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import App from "./App.vue";

// TODO verify working.
configureGTag({
  tagId: "G-T8GEX2GPTP"
});

const pinia = createPinia();
const app = createApp(App);
app.use(createBootstrap());
app.use(pinia);

// app.config.productionTip = false;
app.mount("#app");
