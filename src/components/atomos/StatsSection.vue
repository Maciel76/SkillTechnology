<!-- src/components/StatsSection.vue -->
<template>
    <section class="stats" ref="statsSection">
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
  /* Estilos específicos para a seção de estatísticas */
  
  </style>