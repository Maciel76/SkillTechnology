<template>
    <div class="article-content">
      <!-- Conteúdo dinâmico baseado no articleId -->
      <div v-if="articleId === 'vue3-intro'">
        <h2>Introdução ao Vue 3</h2>
        <p>Vue 3 é um framework incrível para desenvolvimento web.</p>
        <img src="https://exemplo.com/imagem-vue.jpg" alt="Vue 3" class="dynamic-image" />
        <p>Para saber mais, visite <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
      </div>
  
      <div v-else-if="articleId === 'vue-performance'">
        <h2>Otimizando Performance em Vue</h2>
        <p>Aqui estão algumas dicas para melhorar a performance:</p>
        <ul>
          <li>Use <strong>Lazy Loading</strong>.</li>
          <li>Evite reatividade desnecessária.</li>
          <li>Utilize <strong>Tree Shaking</strong>.</li>
        </ul>
        <img src="https://exemplo.com/imagem-performance.jpg" alt="Performance" class="dynamic-image" />
      </div>
  
      <div v-else>
        <p>Conteúdo não encontrado.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArticleContent',
    props: {
      articleId: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .article-content {
    line-height: 1.6;
    font-size: 1.1rem;
    color: var(--text-light);
  }
  
  .dynamic-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>