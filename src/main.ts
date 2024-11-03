import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import '@fortawesome/fontawesome-free/css/all.css'

import App from '@/App.vue'
import router from './router'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const options: ToastContainerOptions = {
  autoClose: 3000, 
  position: 'top-right' 
}

const app = createApp(App)

app.use(Vue3Toastify, options)

app.use(createPinia())
app.use(router)
app.mount('#app')
