import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css';

const app = createApp(App)

app.config.globalProperties.$limit = 20;
app.use(router)

app.mount('#app')
