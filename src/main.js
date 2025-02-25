// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/style.css'
import './assets/css/style2.css'
import './assets/css/blog.css'
import './assets/css/dashboard.css'
import './assets/css/planos.css'
import './assets/css/institucional.css'
import './assets/css/pageServicos.css'
import './assets/css/servicos.css'
import './assets/css/servicos1.css'
import './assets/css/stilo.css'
import './assets/css/style.css'
import './assets/css/ecommerce.css'

const app = createApp(App);
app.use(router);
app.mount('#app');

