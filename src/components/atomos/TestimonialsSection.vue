<!-- src/components/TestimonialsSection.vue -->
<template>
    <section class="testimonials">
      <h2>O Que Nossos<br><span class="highlight">Clientes Satisfeitos</span> Falaram</h2>
      <div class="testimonial-cards">
        <!-- Testemunho 1 -->
        <div class="testimonial-card">
          <div class="client-info">
            <img src="/src/assets/img/image/user1.png" alt="John Smith" class="client-avatar">
            <div>
              <h3>John Smith</h3>
              <p>CEO at Tech Agency</p>
            </div>
          </div>
          <p class="testimonial-text">The material is really updated, so I don't think I need to go to anywhere else. Really good course!</p>
          <router-link to="/feedback" class="learn-more" id="seemore">Ver Mais →</router-link>
        </div>
  
        <!-- Testemunho 2 -->
        <div class="testimonial-card active">
          <div class="client-info">
            <img src="/src/assets/img/image/user4.png" alt="Sarah Davis" class="client-avatar">
            <div>
              <h3>Sarah Davis</h3>
              <p>Product Designer</p>
            </div>
          </div>
          <p class="testimonial-text">Very different from conventional agency, this one is better, more professional and experienced.</p>
          <router-link to="/feedback" class="learn-more" id="seemore">Ver Mais →</router-link>
        </div>
  
        <!-- Testemunho 3 -->
        <div class="testimonial-card">
          <div class="client-info">
            <img src="/src/assets/img/image/user3.png" alt="Karen Morgan" class="client-avatar">
            <div>
              <h3>Karen Morgan</h3>
              <p>Design Lead</p>
            </div>
          </div>
          <p class="testimonial-text">Again with this it's not complicated, just learning as usual but more professional.</p>
          <router-link to="/feedback" class="learn-more" id="seemore">Ver Mais →</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para a seção de testemunhos */

  </style>