<template>
  <div>
    <Header />
    <main>
      <section class="institutional-hero">
          <h1>What's in the <span class="highlight">Event?</span></h1>
          <p>Descubra os eventos exclusivos que preparamos para impulsionar seu conhecimento e networking.</p>
      </section>

      <div class="institutional-content">
          <section class="content-section animate-on-scroll">
              <h2>Benefícios dos Nossos Eventos</h2>
              <div class="event-features">
                  <div class="event-feature">
                      <img src="https://api.iconify.design/heroicons:academic-cap.svg" alt="Aprendizado">
                      <div>
                          <h3>Aprendizado Prático</h3>
                          <p>Workshops hands-on com especialistas da indústria.</p>
                      </div>
                  </div>
                  <!-- Add more features -->
              </div>
          </section>

          <section class="content-section animate-on-scroll">
              <h2>Próximos Eventos</h2>
              <div class="events-grid">
                  <!-- Add event cards -->
              </div>
          </section>

          <section class="content-section animate-on-scroll">
              <h2>Inscreva-se</h2>
              <div class="event-registration">
                  <!-- Add registration form -->
              </div>
          </section>
      </div>
  </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';

export default {
  name: 'EventoView',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>