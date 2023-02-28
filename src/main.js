import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'


createApp(App).use(router).use(plugin, defaultConfig).mount('#app')
