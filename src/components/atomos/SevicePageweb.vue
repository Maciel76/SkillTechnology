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

        <section class="portfolio-section">
            <h2>Portfólio</h2>
            <div class="portfolio-grid">
                <!-- Add portfolio items -->
            </div>
        </section>

        <section class="faq-section">
            <h2>Perguntas Frequentes</h2>
            <div class="faq-list">
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Quanto tempo leva para desenvolver um website?</h3>
                        <img src="https://api.iconify.design/heroicons:chevron-down.svg" alt="Expandir">
                    </div>
                    <div class="faq-answer">
                        <p>O tempo de desenvolvimento varia de acordo com a complexidade do projeto, mas geralmente leva entre 4 a 8 semanas.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Quanto custa para desenvolver um website?</h3>
                        <img src="https://api.iconify.design/heroicons:chevron-down.svg" alt="Expandir">
                    </div>
                    <div class="faq-answer">
                        <h4>Quanto custa para desenvolver um website?</h4>
                        <p>O valor do desenvolvimento de um website depende do tipo de projeto. Trabalhamos com três categorias principais:

                            Básico (Site Institucional) – A partir de R$1.500
                            Intermediário (Site com Blog, Integrações e SEO) – A partir de R$3.500
                            Avançado (E-commerce, Sistemas Personalizados) – A partir de R$7.000
                            Cada projeto é único, e podemos personalizar um orçamento conforme suas necessidades</p>
                    </div>
                </div>
                
                <!-- Add more FAQ items -->
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
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  export default {
    name: 'SevicePageweb',
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style>
  /* Estilos globais ou específicos da página */
  </style>