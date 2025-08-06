import { createBootstrap } from 'bootstrap-vue-next'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { configure as configureGTag } from 'vue-gtag'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'

configureGTag({
  tagId: 'G-T8GEX2GPTP',
  config: {
    app_name: 'talk-piggy',
    send_page_view: true,
  },
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(createBootstrap())
app.use(pinia)

app.mount('#app')
