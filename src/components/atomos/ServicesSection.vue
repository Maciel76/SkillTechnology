<!-- src/components/ServicesSection.vue -->
<template>
  <section class="services">
    <div class="services-header">
      <h2>✨ Soluções <span class="highlight"> IA </span> que Simplifica <br> Otimiza e Faz Sua <span class="highlight"> Empresa Crescer</span></h2>
      <router-link to="#"><button class="cta-button">Ver Mais</button></router-link>
    </div>
    <div class="service-cards">
      <!-- Serviço 1: Websites Inteligentes -->
      <div class="service-card active">
        <img src="/src/assets/img//svg/website.svg" alt="Website" class="service-icon">
        <h3>Websites Inteligentes</h3>
        <p>Criação de sites dinâmicos com IA para personalizar a experiência do usuário.</p>
        <router-link to="/pageWebsite" class="learn-more" id="seemore">Ver mais →</router-link>
      </div>
  
      <!-- Serviço 2: Aplicativos com IA -->
      <div class="service-card">
        <img src="/src/assets/img/svg/app.svg" alt="Aplicativos" class="service-icon">
        <h3>Aplicativos Inteligente</h3>
        <p>Desenvolvimento de apps que aprendem e evoluem com o uso.</p>
        <router-link to="/pageAplicativos" class="learn-more" id="seemore">Ver mais →</router-link>
      </div>
  
      <!-- Serviço 3: UX/UI Inteligente -->
      <div class="service-card">
        <img src="/src/assets/img/svg/ux.svg" alt="UX/UI Design" class="service-icon">
        <h3>UX/UI Inteligente</h3>
        <p>Interfaces que se adaptam ao comportamento do usuário com IA.</p>
        <router-link to="/pageInterface" class="learn-more" id="seemore">Ver mais →</router-link>
      </div>
  
      <!-- Serviço 3: Geração de Imagem e Vídeo com IA -->
        <div class="service-card">
        <img src="/src/assets/img/svg/imagem.svg" alt="Geração de Imagem e Vídeo" class="service-icon">
        <h3>Imagem e Vídeo com IA</h3>
        <p>Criamos conteúdos visuais impactantes e vídeos dinâmicos que tona seu negocio único com tecnologia de IA.</p>
        <router-link to="/pageMidia" class="learn-more" id="seemore">Ver mais →</router-link>
      </div>
  
      <!-- Serviço 5: E-commerce Automatizado -->
      <div class="service-card">
        <img src="/src/assets/img/svg/commece.svg" alt="E-commerce" class="service-icon">
        <h3>E-commerce Automatizado</h3>
        <p>Plataformas que recomendam produtos e otimizam vendas com IA.</p>
        <router-link to="/pageEcommerce" class="learn-more" id="seemore">Ver mais →</router-link>
      </div>
  
      <!-- Serviço 6: Consultoria com IA -->
      <div class="service-card">
        <img src="/src/assets/img/svg/suporte.svg" alt="Consultoria e Suporte" class="service-icon">
        <h3>Consultoria com IA</h3>
        <p>Análise de dados e insights estratégicos para impulsionar seu negócio.</p>
        <router-link to="/pageConsultoria" class="learn-more" id="seemore">Ver mais →</router-link>
      </div>
    </div>
  </section>
  
  
  </template>
  
  <script>
  export default {
    name: 'ServicesSection',
  };
  </script>
  
  <style scoped>
  /* Services Section */
.services {
  padding: 5rem 5%;
}

.services-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.services-header h2 {
  font-size: 3rem;
  line-height: 1.2;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 24px;
  transition: all 0.3s ease;
}

.service-card.active {
  background: var(--primary-color);
  color: white;
}

.service-card.active p {
  color: rgba(255, 255, 255, 0.8);
}

.service-card.active .learn-more {
  color: white;
}

.service-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--gray-color);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.learn-more {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}
  
  </style>