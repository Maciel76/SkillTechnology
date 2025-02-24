// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Importe seus componentes aqui
import About from './components/About.vue';
import PlanosView from './components/PlanosView.vue'; // Importe o componente PlanosView
import FeedbackView from './components/FeedbackView.vue'; // Importe o componente FeedbackView
import NovaAvaliacaoPage from './components/atomos/NovaAvaliacaoPage.vue';
import ServicosView from './components/ServicosView.vue'; // Importe o componente ServicosView
import MissaoView from './components/MissaoView.vue'; // Importe o componente MissaoView
import SobreView from './components/SobreView.vue'; // Importe o componente SobreView
import EventoView from './components/EventoView.vue'; // Importe o componente EventoView
import PoliticaView from './components/PoliticaView.vue'; // Importe o componente PoliticaView
import TermosView from './components/TermosView.vue'; // Importe o componente TermosView
import SevicePageweb from './components/atomos/SevicePageweb.vue'; // Importe o componente SevicePageweb



const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/planos', component: PlanosView }, // Rota para Planos e Preços
  { path: '/feedback', component: FeedbackView }, // Rota para Avaliações
  { path: '/nova-avaliacao', component: NovaAvaliacaoPage }, // Rota para Nova Avaliação
  { path: '/servicos', component: ServicosView }, // Rota para Serviços
  { path: '/missao', component: MissaoView }, // Rota para Missão
  { path: '/sobre', component: SobreView }, // Rota para Sobre
  { path: '/evento', component: EventoView }, // Rota para Evento
  { path: '/politicaPrivacidade', component: PoliticaView }, // Rota para Política de Privacidade
  { path: '/termosUso', component: TermosView }, // Rota para Termos de Uso
  { path: '/servicoPageweb', component: SevicePageweb }, // Rota para Serviço de Página Web
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;