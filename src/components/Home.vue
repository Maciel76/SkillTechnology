<!-- src/components/Home.vue -->
<template>
    <div>
        <Header /> <!-- Usando o componente Header --> 
        <main>
            <HeroSection /> <!-- Usando o componente HeroSection -->           
    
            <StatsSection /> <!-- Usando o componente StatsSection -->

            <ProgectDetalhe /> <!-- Usando o componente ProgectDetalhe -->            
            
            <ServicesSection /> <!-- Usando o componente ServicesSection -->
    
             <PrincipaisProjetos /> <!-- Usando o componente PrincipaisProjetos -->
    
            <TestimonialsSection /> <!-- Usando o componente AvaliacoesSection -->

            <ServingSection /> <!-- Usando o componente ServingSection -->
    
            <ContactSection /> <!-- Usando o componente ContactSection -->
        </main>
    
        <Footer /> <!-- Usando o componente Footer -->
    </div>
  </template>
  
<script>
import Header from './atomos/Header.vue'; // Importando o componente Header
import HeroSection from './atomos/HeroSection.vue'; // Importando o componente HeroSection
import StatsSection from './atomos/StatsSection.vue'; // Importando o componente StatsSection
import ServingSection from './atomos/ServingSection.vue'; // Importando o componente ServingSection
import ServicesSection from './atomos/ServicesSection.vue'; // Importando o componente ServicesSection
import PortfolioSection from './atomos/PortfolioSection.vue'; // Importando o componente PortfolioSection
import TestimonialsSection from './atomos/TestimonialsSection.vue'; // Importando o componente A
import ContactSection from './atomos/ContactSection.vue'; // Importando o componente ContactSection
import Footer from './atomos/Footer.vue'; // Importando o componente Footer
import ProgectDetalhe from './atomos/components/celula/ProgectDetalhe.vue'; // Importando o componente Footer
import PrincipaisProjetos from './atomos/PrincipaisProjetos.vue';

export default {
  name: 'Home',
  components: {
    Header, // Registrando o componente Header
    HeroSection, // Registrando o componente HeroSection
    StatsSection, // Registrando o componente StatsSection
    ServingSection, // Registrando o componente ServingSection
    ServicesSection, // Registrando o componente ServicesSection
    PortfolioSection, // Registrando o componente PortfolioSection
    TestimonialsSection, // Registrando pagina de avaliação
    ContactSection, // Registrando o componente ContactSection
    Footer, // Registrando o componente Footer
    ProgectDetalhe,
    PrincipaisProjetos,
  },
};
</script>

<style>
/* Estilos globais ou específicos da Home */
</style>