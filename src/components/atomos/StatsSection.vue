<!-- src/components/StatsSection.vue -->
<template>
  <section class="stats" ref="statsSection">
    <div class="stats-container">
      <div class="stat-card">
        <h2 ref="stat1">0</h2>
        <p>Clientes Atendidos</p>
      </div>
      <div class="stat-card">
        <h2 ref="stat2">0</h2>
        <p>Anos de Experiência</p>
      </div>
      <div class="stat-card">
        <h2 ref="stat3">0</h2>
        <p>Designs Profissionais</p>
      </div>
      <div class="stat-card">
        <h2 ref="stat4">0</h2>
        <p>Produtos Digitais</p>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: 'StatsSection',
  mounted() {
    this.setupAnimation();
  },
  methods: {
    setupAnimation() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateStats();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // Dispara a animação quando 50% da seção estiver visível
      );

      if (this.$refs.statsSection) {
        observer.observe(this.$refs.statsSection);
      }
    },
    animateStats() {
      this.animateNumber(this.$refs.stat1, 0, 100, 2000); // 0 a 100 em 2 segundos
      this.animateNumber(this.$refs.stat2, 0, 10, 2000); // 0 a 10 em 2 segundos
      this.animateNumber(this.$refs.stat3, 0, 5, 2000); // 0 a 5 em 2 segundos
      this.animateNumber(this.$refs.stat4, 0, 12, 2000); // 0 a 12 em 2 segundos
    },
    animateNumber(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
};
</script>
  
<style scoped>
/* Variáveis de cores */
:root {
  --primary-color: #0052FF;
  --gray-color: #666666;
  --background-dark: #1A1D1F;
  --card-bg: #f8f9fa;
}

/* Stats Section */
.stats {
  padding: 4rem 5%;
  background-color: var(--background-dark);
  border-radius: 24px;
  margin: 0 5%;
  margin-bottom: 5rem;
  overflow: hidden; /* Para esconder o overflow da animação */
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background-color: var(--card-bg);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.stat-card h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-card p {
  color: var(--gray-color);
  font-size: 1rem;
}

/* Responsividade e Rolagem Manual para Mobile */
@media (max-width: 768px) {
  .stats {
    padding: 2rem 5%;
    border-radius: 24px;
    margin: 0 5%;
    margin-bottom: 5rem;
    overflow: hidden; /* Para esconder o overflow da animação */
    background-color: #26292b;
  }

  .stats-container {
    display: flex;
    gap: 1rem;
    overflow-x: scroll; /* Habilita a rolagem horizontal */
    scroll-snap-type: x mandatory; /* Melhora a experiência de rolagem */
    scroll-behavior: smooth; /* Rolagem suave */
    -webkit-overflow-scrolling: touch; /* Melhora a rolagem em dispositivos móveis */
  }

  .stat-card {
    min-width: 200px; /* Largura fixa para cada card */
    flex-shrink: 0; /* Impede que os cards encolham */
    background-color: aliceblue;
    scroll-snap-align: start; /* Alinha os cards ao rolar */
  }

  /* Esconde a barra de rolagem */
  .stats-container::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem no Chrome, Safari e Edge */
  }

  .stats-container {
    -ms-overflow-style: none; /* Oculta a barra de rolagem no IE e Edge */
    scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */
  }
}
</style>