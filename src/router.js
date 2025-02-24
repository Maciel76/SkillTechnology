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
import PageWesite from './components/atomos/pageS/PageWebsite.vue'; // Importe o componente PageSevices serviços
import PageAplicativos from './components/atomos/pageS/PageAplicativos.vue'; // Importe o componente PageAplicativos serviços
import PageInterface from './components/atomos/pageS/PageInterface.vue'; // Importe o componente PageInterface serviços
import PageMidia from './components/atomos/pageS/PageMidia.vue'; // Importe o componente PageMidia serviços
import PageEcommerce from './components/atomos/pageS/PageEcommerce.vue'; // Importe o componente PageEcommerce serviços
import PageConsultoria from './components/atomos/pageS/PageConsultoria.vue';  // Importe o componente Consultoria serviços
 

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
  { path: '/pageWebsite', component: PageWesite }, // Rota para Serviço de Website
  { path: '/pageAplicativos', component: PageAplicativos }, // Rota para Serviço de Aplicativos
  { path: '/pageInterface', component: PageInterface }, // Rota para Serviço de Interface
  { path: '/pageMidia', component: PageMidia }, // Rota para Serviço de Mídia
  { path: '/pageEcommerce', component: PageEcommerce }, // Rota para Serviço de E-commerce
  { path: '/pageConsultoria', component: PageConsultoria }, // Rota para Serviço de Consultoria
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;