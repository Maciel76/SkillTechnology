<!-- src/components/PortfolioSection.vue -->
<template>
    <section class="projects">
      <div class="projects-header">
        <h2>🏆 Confira Nossos <br>Projetos <span class="highlight">Concluídos</span></h2>
        <div class="header-buttons">
          <button class="outline-button">Iniciar Novo Projeto</button>
          <button class="cta-button">Ver Tudo</button>
        </div>
      </div>
      <div class="project-gallery">
        <!-- Projeto 1 -->
        <div class="project-card">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="3D Project" class="project-image">
          <div class="project-label">
            <h3>AR 3D Design Concept</h3>
            <p>AR creation with 3D design to solve problems </p>
          </div>
        </div>
  
        <!-- Projeto 2 -->
        <div class="project-card">
          <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" alt="UI Project" class="project-image">
          <div class="project-label">
            <h3>UI Project</h3>
            <p>Modern and intuitive user interface design</p>
          </div>
        </div>
  
        <!-- Projeto 3 -->
        <div class="project-card">
          <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e" alt="Design Project" class="project-image">
          <div class="project-label">
            <h3>Design Project</h3>
            <p>Creative and functional design solutions</p>
          </div>
        </div>
  
        <!-- Projeto 4 -->
        <div class="project-card">
          <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="Mobile Project" class="project-image">
          <div class="project-label">
            <h3>Mobile Project</h3>
            <p>Responsive and user-friendly mobile </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PortfolioSection',
  };
  </script>
  
  <style scoped>
  
  </style>