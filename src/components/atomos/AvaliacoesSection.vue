<!-- src/components/AvaliacoesSection.vue -->
<template>
    <section id="avaliacoes" class="avaliacoes-section">
      <div class="container">
        <h2 class="section-title">O que nossos clientes dizem</h2>
        <div class="avaliacoes-grid">
          <!-- Avaliação 1 -->
          <div class="avaliacao-card">
            <div class="avaliacao-content">
              <p class="avaliacao-texto">
                "A equipe da <span class="skillT">Skill Technology</span> foi incrível! Eles entenderam exatamente o que precisávamos e entregaram um site moderno e funcional. Recomendo a todos que buscam qualidade e profissionalismo."
              </p>
              <div class="avaliacao-autor">
                <img src="/src/assets/img/image/user1.png" alt="Foto do Cliente 1" class="autor-foto">
                <div class="autor-info">
                  <h4 class="autor-nome">João Silva</h4>
                  <p class="autor-empresa">CEO da Empresa Xbarcon</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Avaliação 2 -->
          <div class="avaliacao-card">
            <div class="avaliacao-content">
              <p class="avaliacao-texto">
                "Fiquei impressionado com a atenção aos detalhes e o suporte pós-entrega. Nosso site não só ficou lindo, mas também aumentou nossas conversões. Parabéns pelo excelente trabalho!"
              </p>
              <div class="avaliacao-autor">
                <img src="/src/assets/img/image/user2.png" alt="Foto do Cliente 2" class="autor-foto">
                <div class="autor-info">
                  <h4 class="autor-nome">Maria Souza</h4>
                  <p class="autor-empresa">Fundadora da Startup Ylanna</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Avaliação 3 -->
          <div class="avaliacao-card">
            <div class="avaliacao-content">
              <p class="avaliacao-texto">
                "Trabalhar com a <span class="skillT">Skill Technology</span> foi uma experiência incrível. Eles são rápidos, eficientes e sempre abertos a feedback. Nosso site superou todas as expectativas!"
              </p>
              <div class="avaliacao-autor">
                <img src="/src/assets/img/image/user3.png" alt="Foto do Cliente 3" class="autor-foto">
                <div class="autor-info">
                  <h4 class="autor-nome">Paula Oliveira</h4>
                  <p class="autor-empresa">Diretora da Empresa Zcosmit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AvaliacoesSection',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para a seção de avaliações */
  
  </style>