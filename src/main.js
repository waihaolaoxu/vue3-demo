import { createApp } from 'vue'
import router from './routers/index'
import { store } from './store/index'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

