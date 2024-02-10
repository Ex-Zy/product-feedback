import './scss/app.scss'

import 'v-dropdown-menu/css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DropdownMenu from 'v-dropdown-menu'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(DropdownMenu)

app.mount('#app')
