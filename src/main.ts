import './scss/app.scss'
import 'floating-vue/dist/style.css'
import 'v-dropdown-menu/css'
import 'vue-toast-notification/dist/theme-bootstrap.css'

import FloatingVue from 'floating-vue'
import { createPinia } from 'pinia'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DropdownMenu from 'v-dropdown-menu'
import { createApp } from 'vue'
import { plugin as Slicksort } from 'vue-slicksort'
import ToastPlugin from 'vue-toast-notification'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(DropdownMenu)
app.use(FloatingVue)
app.use(Slicksort)
app.use(ToastPlugin)

app.mount('#app')
