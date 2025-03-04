import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.ts'
import { inject } from '@vercel/analytics'
inject()

const app = createApp(App)
app.use(router)
app.mount('#app')