import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import scrollbar from "vue3-smooth-scrollbar"

createApp(App)
    .component("scrollbar", scrollbar)
    .use(PerfectScrollbar)
    .use(router).mount('#app')
