<template>
  <div>
    <Header />
    <main>
      <!-- Conteúdo da página -->
       <HeroPage />
       <ServicesPage />
       <BeneficioPage />
       <FeaturesPage />
       <TestimonialsPage />
       <ContatoservicoPage />
        
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';
import HeroPage from './atomos/components/celula/HeroPage.vue';
import ServicesPage from './atomos/components/celula/ServicesPage.vue';
import BeneficioPage from './atomos/components/celula/BeneficioPage.vue';
import FeaturesPage from './atomos/components/celula/FeaturesPage.vue';
import TestimonialsPage from './atomos/components/celula/TestimonialsPage.vue';
import ContatoservicoPage from './atomos/components/celula/ContatoservicoPage.vue';


export default {
  name: 'ServicosView',
  components: {
    Header,
    Footer,
    HeroPage,
    ServicesPage,
    BeneficioPage,
    FeaturesPage,
    TestimonialsPage,
    ContatoservicoPage,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>