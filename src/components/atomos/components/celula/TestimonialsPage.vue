<template>
    <main>
      <!-- Testimonials Section -->
      <section class="testimonials-section">
        <h2>Depoimentos de Nossos Clientes</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="client-info">
              <img src="/src/assets/img/image/user5.png" alt="Client" class="client-avatar" />
              <div>
                <h3>João Silva</h3>
                <p>CEO, Tech Solutions</p>
              </div>
            </div>
            <p class="testimonial-text">"A implementação da IA revolucionou nossos processos internos, reduzindo custos em 40% e aumentando a produtividade em 60%."</p>
            <router-link to="#" class="learn-more">Ver Projeto →</router-link>
          </div>
          <div class="testimonial-card">
            <div class="client-info">
              <img src="/src/assets/img/image/user6.png" alt="Client" class="client-avatar" />
              <div>
                <h3>Guilherme Santos</h3>
                <p>CEO, Tech Solutions</p>
              </div>
            </div>
            <p class="testimonial-text">"A implementação da IA revolucionou nossos processos internos, reduzindo custos em 40% e aumentando a produtividade em 60%."</p>
            <router-link to="#" class="learn-more">Ver Projeto →</router-link>
          </div>
          <div class="testimonial-card">
            <div class="client-info">
              <img src="/src/assets/img/image/user7.png" alt="Client" class="client-avatar" />
              <div>
                <h3>Maria Santos</h3>
                <p>Marketing Director, E-commerce</p>
              </div>
            </div>
            <p class="testimonial-text">"O sistema de marketing automatizado nos ajudou a triplicar nossas conversões em apenas 3 meses."</p>
            <router-link to="#" class="learn-more">Ver Projeto →</router-link>
          </div>
        </div>
      </section>
    </main>
  </template>

<script>  
export default {
  name: 'TestimonialsPage',
};
</script>

<style scoped>
/* Variáveis de cores */
:root {
    --page-bg: #ffffff;
    --text-primary: #1A1D1F;
    --text-secondary: #666666;
    --primary-color: #0052FF;
    --secondary-color: #E5E7EB;
    --accent-color1: #2c6add;
    --success-color: #10B981;
    --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --section-padding: 5rem;
}

[data-theme="dark"] {
  --page-bg: #1A1D1F;
  --text-primary: #ffffff;
  --text-secondary: #9CA3AF;
  --secondary-color: #374151;
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

/* Testimonials Section */
.testimonials-section {
  padding: var(--section-padding) 5%;
  background: var(--secondary-color);
}

.testimonials-section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: var(--page-bg);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  object-fit: cover;
}

.client-info h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.client-info p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.learn-more {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease, color 0.3s ease;
}

.learn-more:hover {
  color: var(--accent-color1);
  transform: translateX(10px);
}

/* Responsividade */
@media (max-width: 768px) {
  .testimonials-section h2 {
    font-size: 2rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}
</style>