import './assets/main.css'

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'
import config from '../formkit.config'

const app = createApp(App)

app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
