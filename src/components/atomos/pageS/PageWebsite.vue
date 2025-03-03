<template>
  <div>
    <Header />
    <main>
      <section class="service-hero">
          <h1>Desenvolvimento de <span class="highlight">Websites</span></h1>
          <p>Criamos websites profissionais, responsivos e otimizados para converter visitantes em clientes.</p>
          <button class="cta-button">Solicitar Orçamento</button>
      </section>

      <section class="service-features">
          <h2>Por que escolher nossos serviços?</h2>
          <div class="features-grid">
              <div class="feature-card">
                  <img src="/src/assets/img/svg/phone.svg" alt="Responsivo">
                  <h3>Design Responsivo</h3>
                  <p>Seu site perfeito em qualquer dispositivo: desktop, tablet ou smartphone.</p>
              </div>
              <div class="feature-card">
                  <img src="/src/assets/img/svg/rockert.svg" alt="Performance">
                  <h3>Alta Performance</h3>
                  <p>Carregamento rápido e otimizado para melhor experiência do usuário.</p>
              </div>
              <div class="feature-card">
                  <img src="/src/assets/img/svg/lupa.svg" alt="SEO">
                  <h3>SEO Otimizado</h3>
                  <p>Melhor visibilidade nos mecanismos de busca como Google.</p>
              </div>
          </div>
      </section>

      <section class="process-section">
          <h1>Nosso Processo</h1>
          <div class="process-steps">
              <div class="process-step">
                  <div class="step-number">1</div>
                  <h3>Planejamento</h3>
                  <p>Briefing e definição de escopo do projeto</p>
              </div>
              <div class="process-step">
                  <div class="step-number">2</div>
                  <h3>Design</h3>
                  <p>Criação de wireframes e protótipos</p>
              </div>
              <div class="process-step">
                  <div class="step-number">3</div>
                  <h3>Desenvolvimento</h3>
                  <p>Codificação e implementação</p>
              </div>
              <div class="process-step">
                  <div class="step-number">4</div>
                  <h3>Lançamento</h3>
                  <p>Testes e publicação</p>
              </div>
          </div>
      </section>

      <!-- Seção Portfolio -->
      <PortfolioSection />

      <section class="faq-section">
          <h2>Perguntas Frequentes</h2>
          <div class="faq-list">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-item"
              :class="{ active: faq.isOpen }"
            >
              <div class="faq-question" @click="toggleFAQ(index)">
                <h3>{{ faq.question }}</h3>
                <img
                  :src="`https://api.iconify.design/heroicons:chevron-${faq.isOpen ? 'up' : 'down'}.svg`"
                  alt="Expandir"
                />
              </div>
              <div class="faq-answer" v-if="faq.isOpen">
                <p v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </section>

      <section class="service-contact">
          <h2>Vamos criar seu website?</h2>
          <p>Entre em contato conosco e transforme sua presença digital!</p>
          <button class="cta-button">Iniciar Projeto</button>
      </section>
  </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import PortfolioSection from './PortfolioSection.vue';

export default {
  name: 'PageWebsite',
  components: {
    Header,
    Footer,
    PortfolioSection,
  },
  data() {
    return {
      faqs: [
        {
          question: 'Quanto tempo leva para desenvolver um website?',
          answer: 'O tempo de desenvolvimento varia de acordo com a complexidade do projeto, mas geralmente leva entre 4 a 8 semanas.',
          isOpen: false,
        },
        {
          question: 'Quanto custa para desenvolver um website?',
          answer: `
            O valor do desenvolvimento de um website depende do tipo de projeto. Trabalhamos com três categorias principais:
            <ul>
              <li>Básico (Site Institucional) – A partir de R$1.500</li>
              <li>Intermediário (Site com Blog, Integrações e SEO) – A partir de R$3.500</li>
              <li>Avançado (E-commerce, Sistemas Personalizados) – A partir de R$7.000</li>
            </ul>
            Cada projeto é único, e podemos personalizar um orçamento conforme suas necessidades.
          `,
          isOpen: false,
        },
        // Adicione mais perguntas aqui
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
  },
};
</script>

<style scoped=true&lang.css>
/* Services Pages Styles */
:root {
  --service-bg: var(--bg-color);
  --service-text: var(--text-color);
  --service-gray: var(--text-color-light);
  --service-light-gray: var(--bg-color-light);
  --service-primary: var(--primary-color);
  --service-secondary: var(--secondary-color);
  --service-accent: var(--accent-color);
  --service-card-shadow: var(--card-shadow);
}

/* General Page Styles */
.service-page {
  background-color: var(--service-bg);
  color: var(--service-text);
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Service Hero */
.service-hero {
  padding: 6rem 5% 4rem;
  text-align: center;
  background: linear-gradient(135deg, var(--service-primary) 0%, var(--service-accent) 100%);
  color: white;
  position: relative;
  overflow: hidden;
  animation: slideIn 1.2s ease;
}

.service-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/src/assets/img/pattern.png');
  opacity: 0.1;
  animation: float 20s linear infinite;
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.service-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  animation: fadeIn 1.5s ease;
}

.service-hero p {
  color: var(--service-gray);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  animation: fadeIn 1.8s ease;
}

/* Service Features */
.service-features {
  padding: 4rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: var(--service-bg);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid var(--service-secondary);
  box-shadow: var(--service-card-shadow);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeIn 1.5s ease;
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.feature-card img {
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
  animation: popIn 0.8s ease;
}

@keyframes popIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Process Section */
.process-section {
  padding: 6rem 5%;
  background: linear-gradient(to bottom, var(--service-bg), var(--service-light-gray));
  animation: fadeIn 1.5s ease;
  text-align: center;
}

.process-steps {
  max-width: 1200px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.process-step {
  text-align: center;
  position: relative;
  animation: fadeInUp 1.5s ease;
}

@keyframes fadeInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.process-step::after {
  content: '';
  position: absolute;
  top: 30px;
  right: -50%;
  width: 100%;
  height: 2px;
  background: var(--service-primary);
}

.process-step:last-child::after {
  display: none;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--service-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease;
}

.step-number:hover {
  transform: scale(1.2);
}

/* FAQ Section */
.faq-section {
  padding: 4rem 5%;
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
  border: 1px solid var(--service-secondary);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
}

.faq-question:hover {
  background: var(--service-secondary);
}

.faq-answer {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.3s ease;
}

.faq-item.active .faq-answer {
  padding: 0 1.5rem 1.5rem;
  max-height: 500px;
}

/* Contact Section */
.service-contact {
  padding: 6rem 5%;
  text-align: center;
  background: linear-gradient(135deg, var(--service-primary) 0%, var(--service-accent) 100%);
  color: white;
  position: relative;
  overflow: hidden;
  animation: fadeIn 1.5s ease;
}

@keyframes float {
  from { transform: translateY(0) rotate(0deg); }
  to { transform: translateY(-100%) rotate(10deg); }
}

.service-contact h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.service-contact p {
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .features-grid,
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-step::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .service-hero h1 {
    font-size: 2.5rem;
  }

  .features-grid,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
