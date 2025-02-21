<!-- src/components/ServicesSection.vue -->
<template>
    <section class="services">
      <div class="services-header">
        <h2>🚀 O Que Oferecemos Para <br>Você e Sua <span class="highlight">Empresa</span></h2>
        <button class="cta-button">Ver Mais</button>
      </div>
      <div class="service-cards">
        <!-- Serviço 1: Website -->
        <div class="service-card active">
          <img src="/src/assets/img//svg/website.svg" alt="Website" class="service-icon">
          <h3>Website</h3>
          <p>Product that has a good appearance can attract users</p>
          <router-link to="/website" class="learn-more" id="seemore" >Ver mais →</router-link>
        </div>
  
        <!-- Serviço 2: Aplicativos -->
        <div class="service-card">
          <img src="/src/assets/img/svg/app.svg" alt="Aplicativos" class="service-icon">
          <h3>Aplicativos</h3>
          <p>Brand identity is needed to make business trustworthy</p>
          <router-link to="/apps" class="learn-more" id="seemore">Ver mais →</router-link>
        </div>
  
        <!-- Serviço 3: UX/UI Design -->
        <div class="service-card">
          <img src="/src/assets/img/svg/ux.svg" alt="UX/UI Design" class="service-icon">
          <h3>UX/UI Design</h3>
          <p>3D design is something new and has a high value</p>
          <router-link to="/ux-ui" class="learn-more" id="seemore">Ver mais →</router-link>
        </div>
  
        <!-- Serviço 4: Illustration -->
        <div class="service-card">
          <img src="/src/assets/img/svg/illustration.svg" alt="Illustration" class="service-icon">
          <h3>Illustration</h3>
          <p>Make your story more eye-catching with a touch of illustration</p>
          <router-link to="/illustration" class="learn-more" id="seemore">Ver mais →</router-link>
        </div>
  
        <!-- Serviço 5: E-commerce -->
        <div class="service-card">
          <img src="/src/assets/img/svg/commece.svg" alt="E-commerce" class="service-icon">
          <h3>E-commerce</h3>
          <p>This new digital painting is still attractive with young people</p>
          <router-link to="/ecommerce" class="learn-more" id="seemore">Ver mais →</router-link>
        </div>
  
        <!-- Serviço 6: Consultoria e Suporte -->
        <div class="service-card">
          <img src="/src/assets/img/svg/suporte.svg" alt="Consultoria e Suporte" class="service-icon">
          <h3>Consultoria e Suporte</h3>
          <p>It is undeniable that businesses must still have print designs</p>
          <router-link to="/consultoria" class="learn-more" id="seemore">Ver mais →</router-link>
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
  /* Estilos específicos para a seção de serviços */
  
  </style>