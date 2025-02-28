<template>
  <div>
    <Header />
    <main>
     <PrecingHero /> <!-- Adicionando o componente PricingHero -->
     <PrecingCategoria /> <!-- Adicionando o componente PricingCategoria -->

    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue'; // Importando o componente Header
import PrecingHero from './atomos/components/celula/PrecingHero.vue'; // Importando o componente PricingHero
import PrecingCategoria from './atomos/components/celula/PrecingCategoria.vue'; // Importando o componente PricingCategoria
import Footer from './atomos/Footer.vue'; // Importando o componente Footer

export default {
  name: 'PlanosView',
  components: {
    Header,
    Footer,
    PrecingHero, // Adicionando o componente PricingHero
    PrecingCategoria,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>