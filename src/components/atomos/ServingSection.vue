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
  /* Serving Section */
.serving {
  padding: 5rem 5%;
}

.serving-content h2 {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 3rem;
}

.office-images {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
}

.office-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

.office-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 24px;
}

.office-label {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.office-icon {
  width: 24px;
  height: 24px;
}

.office-label span {
  font-weight: 600;
}

.office-label p {
  color: var(--gray-color);
  font-size: 0.9rem;
}
  
  </style>