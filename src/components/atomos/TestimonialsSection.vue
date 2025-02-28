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
  /* Testimonials Section */
.testimonials {
  padding: 5rem 5%;
}

.testimonials h2 {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 3rem;
}

.testimonial-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 24px;
  transition: all 0.3s ease;
}

.testimonial-card.active {
  background: var(--altenative-color);
  color: white;
}

.testimonial-card.active p {
  color: rgba(255, 255, 255, 0.8);
}

.client-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.client-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.client-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.client-info p {
  color: var(--gray-color);
  font-size: 0.9rem;
}

.testimonial-text {
  color: var(--gray-color);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

  </style>