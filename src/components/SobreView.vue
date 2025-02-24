<template>
  <div>
    <Header />
    <main>
      <section class="institutional-hero">
          <h1>Sobre <span class="highlight">Nós</span></h1>
          <p>Conheça nossa história, nossa equipe e o que nos torna únicos no mercado de tecnologia.</p>
      </section>

      <div class="institutional-content">
          <section class="content-section animate-on-scroll">
              <h2>Nossa História</h2>
              <p>Fundada em 2014, a Skill Technology nasceu da paixão por criar soluções digitais inovadoras. Ao longo dos anos, expandimos nossa expertise e construímos uma reputação sólida no mercado.</p>
              
              <div class="timeline">
                  <!-- Add timeline content -->
              </div>
          </section>

          <section class="content-section animate-on-scroll">
              <h2>Nossa Equipe</h2>
              <div class="team-grid">
                  <div class="team-member">
                      <img src="/src/assets/img/image/user1.png" alt="João Silva">
                      <h3>Maciel Barbosa</h3>
                      <p>CEO & Fundador</p>
                  </div>
                  <!-- Add more team members -->
              </div>
          </section>

          
      </div>
      
  </main>
  <FeedbackView />
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';
import FeedbackView from './atomos/components/celula/TestimonialsPage.vue';

export default {
  name: 'SobreView',
  components: {
    Header,
    Footer,
    FeedbackView,
  },
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>