<template>
  <div>
    <Header />
    <main>
      <section class="institutional-hero">
          <h1>Termos de <span class="highlight">Uso</span></h1>
          <p>Leia atentamente os termos e condições para utilização dos nossos serviços.</p>
      </section>

      <div class="institutional-content">
          <div class="legal-content">
              <section class="content-section">
                  <h2>1. Aceitação dos Termos</h2>
                  <p>Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.</p>
              </section>

              <section class="content-section">
                  <h2>2. Direitos Autorais</h2>
                  <p>Todo o conteúdo disponível neste site, incluindo mas não se limitando a textos, gráficos, logos, imagens, é de propriedade da Skill Technology ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais.</p>
              </section>

              <section class="content-section">
                  <h2>3. Uso do Site</h2>
                  <p>Você concorda em utilizar este site apenas para propósitos legais e de forma que não viole os direitos de terceiros.</p>
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
  name: 'TermosView',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>