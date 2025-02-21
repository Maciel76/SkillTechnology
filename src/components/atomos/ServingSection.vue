<!-- src/components/ServingSection.vue -->
<template>
    <section class="serving">
      <div class="serving-content">
        <h2>Atendimento Presencial<br>em <span class="highlight">Goiânia</span> e <span class="highlight">Aparecida-Go</span></h2>
        <div class="office-images">
          <!-- Escritório 1: Goiânia -->
          <div class="office-card">
            <img src="/src/assets/img/image/goiania.jpg" alt="Goiânia-imagem" class="office-image">
            <div class="office-label">
              <img src="https://api.iconify.design/heroicons:building-office.svg" alt="Ícone de escritório" class="office-icon">
              <span>Skill Tecnology</span>
              <p>Goiânia e Região</p>
            </div>
          </div>
  
          <!-- Escritório 2: Aparecida de Goiânia -->
          <div class="office-card">
            <img src="/src/assets/img/image/aparecida.jpg" alt="Aparecida de Goiânia" class="office-image">
            <div class="office-label">
              <img src="https://api.iconify.design/heroicons:building-office.svg" alt="Ícone de escritório" class="office-icon">
              <span>Skill Tecnology</span>
              <p>Aparecida-Go e Região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ServingSection',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para a seção de atendimento */
  
  </style>