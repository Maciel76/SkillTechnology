<template>
    <div>
      <Header />
      <main>
        <section class="service-hero">
            <h1>Desenvolvimento de <span class="highlight">Consultoria</span></h1>
            <p>Desenvolvimento de apps que aprendem e evoluem com o uso..</p>
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
            <h2>Nosso Processo</h2>
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

        <PortfolioConsultoria />

        <!-- Perguntas Frequentes -->
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
  import PortfolioConsultoria from './PortfolioConsultoria.vue';
  
  export default {
    name: 'PageAplicativos',
    components: {
      Header,
      Footer,
      PortfolioConsultoria,
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
  
  <style>
  /* Estilos globais ou específicos da página */
  </style>