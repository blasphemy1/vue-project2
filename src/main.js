import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'	
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import './assets/css/fonticon.css'
// import axios from 'axios'
const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)
// app.use(axios)
app.mount('#app')
