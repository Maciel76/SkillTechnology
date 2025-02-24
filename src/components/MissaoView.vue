<template>
  <div>
    <Header />
    <main>
      <section class="institutional-hero">
          <h1>Nossa <span class="highlight">Missão</span></h1>
          <p>Transformando ideias em realidade digital, impulsionando o sucesso dos nossos clientes através da inovação e excelência.</p>
      </section>

      <div class="institutional-content">
          <section class="content-section animate-on-scroll">
              <h2>Nossos Valores</h2>
              <div class="mission-cards">
                  <div class="mission-card">
                      <img src="https://api.iconify.design/heroicons:light-bulb.svg" alt="Inovação">
                      <h3>Inovação</h3>
                      <p>Buscamos constantemente novas soluções e tecnologias para oferecer o melhor aos nossos clientes.</p>
                  </div>
                  <div class="mission-card">
                      <img src="https://api.iconify.design/heroicons:star.svg" alt="Excelência">
                      <h3>Excelência</h3>
                      <p>Comprometimento com a qualidade em cada projeto que desenvolvemos.</p>
                  </div>
                  <div class="mission-card">
                      <img src="https://api.iconify.design/heroicons:users.svg" alt="Colaboração">
                      <h3>Colaboração</h3>
                      <p>Trabalhamos em parceria com nossos clientes para alcançar resultados extraordinários.</p>
                  </div>
              </div>
          </section>

          <section class="content-section animate-on-scroll">
              <h2>Nosso Impacto</h2>
              <p>Ao longo dos anos, temos ajudado empresas a transformar suas visões em realidade digital. Nossa abordagem única combina criatividade, tecnologia e estratégia para entregar resultados excepcionais.</p>
              
              <div class="cta-section">
                  <h2>Vamos transformar seu projeto em realidade!</h2>
                  <p>Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.</p>
                  
              </div>
          </section>
      </div>
      <ContatoservicoPage />
  </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';
import ContatoservicoPage from './atomos/components/celula/ContatoservicoPage.vue';

export default {
  name: 'MissaoView',
  components: {
    Header,
    Footer,
    ContatoservicoPage,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>