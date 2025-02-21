<!-- src/views/FeedbackView.vue -->
<template>
    <div>
      <Header />
  
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
                  <img src="/src/assets/img/image/user4.png" alt="Foto do Cliente 1" class="autor-foto" />
                  <div class="autor-info">
                    <h4 class="autor-nome">João Silva</h4>
                    <p class="autor-empresa">CEO da Empresa X</p>
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
                  <img src="/src/assets/img/image/user2.png" alt="Foto do Cliente 2" class="autor-foto" />
                  <div class="autor-info">
                    <h4 class="autor-nome">Maria Souza</h4>
                    <p class="autor-empresa">Fundadora da Startup Y</p>
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
                  <img src="/src/assets/img/image/user3.png" alt="Foto do Cliente 3" class="autor-foto" />
                  <div class="autor-info">
                    <h4 class="autor-nome">Carlos Oliveira</h4>
                    <p class="autor-empresa">Diretor da Empresa Z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Formulário para nova avaliação -->
          <div class="nova-avaliacao">
            <h3 class="form-title">Deixe sua avaliação</h3>
            <form id="form-avaliacao" class="avaliacao-form" @submit.prevent="submitAvaliacao">
              <div class="form-group">
                <label for="nome">Seu Nome:</label>
                <input type="text" id="nome" v-model="nome" required />
              </div>
              <div class="form-group">
                <label for="empresa">Sua Empresa:</label>
                <input type="text" id="empresa" v-model="empresa" />
              </div>
              <div class="form-group">
                <label for="avaliacao">Sua Avaliação:</label>
                <textarea id="avaliacao" v-model="avaliacao" rows="5" required></textarea>
              </div>
              <div class="form-group">
                <label for="foto">Enviar Foto (opcional):</label>
                <input type="file" id="foto" @change="onFileChange" accept="image/*" />
              </div>
              <button type="submit" class="btn-enviar" :disabled="isSubmitting">
                {{ isSubmitting ? 'Enviando...' : 'Enviar Avaliação' }}
              </button>
            </form>
          </div>
        </div>
      </section>
    <PortfolioSection /> <!-- Usando o componente PortfolioSection -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './atomos/Header.vue';
  import PortfolioSection from './atomos/PortfolioSection.vue'; // Importando o componente PortfolioSection
  import Footer from './atomos/Footer.vue';
  import { useAvaliacao } from '../composables/useAvaliacao';
  
  export default {
    name: 'FeedbackView',
    components: {
      Header,
      Footer,
        PortfolioSection,
    },
    setup() {
      const { nome, empresa, avaliacao, foto, isSubmitting, submitAvaliacao, onFileChange } = useAvaliacao();
  
      return {
        nome,
        empresa,
        avaliacao,
        foto,
        isSubmitting,
        submitAvaliacao,
        onFileChange,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos globais já estão sendo aplicados */
  </style>