<!-- src/components/HeroSection.vue -->
<template>
    <section class="hero">
      <div class="hero-content">
        <div class="social-proof">
          <img src="/src/assets/img/image/user1.png" alt="User 1" class="user-avatar">
          <img src="/src/assets/img/image/user2.png" alt="User 2" class="user-avatar">
          <img src="/src/assets/img/image/user3.png" alt="User 3" class="user-avatar">
          <img src="/src/assets/img/image/user4.png" alt="User 4" class="user-avatar">
          <span>Nossos clientes satisfeitos <router-link to="/feedback" id="seemore">Ver mais...</router-link></span>
        </div>
        <h1>Soluções Web Feitas Para o Seu <span class="highlight" id="typing1">Sucesso</span></h1>
        <p>Criamos Experiências Digitais que Transformam Negócios: Design Exclusivo e Desenvolvimento Sob Medida para o Seu Sucesso Online.</p>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3" alt="Team" class="team-image">
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>
    /* Estilos específicos para a seção hero */
  </style>