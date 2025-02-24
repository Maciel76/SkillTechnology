<template>
  <div>
    <Header />
    <main>
      <section class="institutional-hero">
          <h1>Política de <span class="highlight">Privacidade</span></h1>
          <p>Saiba como protegemos e utilizamos seus dados pessoais.</p>
      </section>

      <div class="institutional-content">
          <div class="legal-content">
              <section class="content-section">
                  <h2>1. Coleta de Dados</h2>
                  <p>Explicamos aqui quais informações coletamos e como elas são utilizadas:</p>
                  <ul>
                      <li>Informações de contato (nome, e-mail, telefone)</li>
                      <li>Dados de navegação e uso do site</li>
                      <li>Informações de pagamento (quando aplicável)</li>
                  </ul>
              </section>

              <section class="content-section">
                  <h2>2. Uso de Cookies</h2>
                  <p>Utilizamos cookies para melhorar sua experiência em nosso site. Saiba mais sobre como funcionam:</p>
                  <ul>
                      <li>Cookies essenciais para funcionamento do site</li>
                      <li>Cookies de análise e desempenho</li>
                      <li>Cookies de publicidade e marketing</li>
                  </ul>
              </section>

              <!-- Add more sections -->
          </div>
      </div>
  </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';

export default {
  name: 'PoliticaView',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>