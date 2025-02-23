// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Importe seus componentes aqui
import About from './components/About.vue';
import PlanosView from './components/PlanosView.vue'; // Importe o componente PlanosView
import FeedbackView from './components/FeedbackView.vue'; // Importe o componente FeedbackView
import NovaAvaliacaoPage from './components/atomos/NovaAvaliacaoPage.vue';
import ServicosView from './components/ServicosView.vue'; // Importe o componente ServicosView

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/planos', component: PlanosView }, // Rota para Planos e Preços
  { path: '/feedback', component: FeedbackView }, // Rota para Avaliações
  { path: '/nova-avaliacao', component: NovaAvaliacaoPage }, // Rota para Nova Avaliação
  { path: '/servicos', component: ServicosView }, // Rota para Serviços
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;