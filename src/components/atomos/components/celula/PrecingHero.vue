<template>  
    <section class="pricing-hero">
            <h1>Planos e <span class="highlight">Preços </span></h1>
            <p>Escolha o plano ideal para o seu projeto</p>
    </section>  
</template>

<script>
export default {
  name: 'PrecingHero',
};
</script>

<style>

/* Estilos globais ou específicos da página */
/* Pricing Hero */
.pricing-hero {
  text-align: center;
  padding: 4rem 5%;
  background: var(--pricing-light-gray);
}

.pricing-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.pricing-hero p {
  color: var(--pricing-gray);
  font-size: 1.2rem;
}
</style>