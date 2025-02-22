<template>
  <div>
    <Header />
    <main>
      <!-- Conteúdo da página -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';

export default {
  name: 'ProjetosDetalhes',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>