import { createApp } from 'vue'
import './css/style.css'
import App from './App.vue'

import { createPinia } from 'pinia'

const app = createApp(App)

.use(createPinia())
app.mount('#app')
