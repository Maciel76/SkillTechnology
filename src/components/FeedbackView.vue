<template>
  <div>
    <Header />

    <section id="avaliacoes" class="avaliacoes-section">
      <div class="container">
        <h2 class="section-title">O que nossos clientes dizem</h2>
        <div class="avaliacoes-grid">
          <!-- Exibe as avaliações existentes -->
          <div v-for="(avaliacao, index) in avaliacoes" :key="index" class="avaliacao-card">
            <div class="avaliacao-content">
              <p class="avaliacao-texto" v-html="avaliacao.avaliacao"></p>
              <div class="avaliacao-autor">
                <img :src="avaliacao.foto" :alt="`Foto de ${avaliacao.nome}`" class="autor-foto" />
                <div class="autor-info">
                  <h4 class="autor-nome">{{ avaliacao.nome }}</h4>
                  <p class="autor-empresa">{{ avaliacao.empresa }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botão para adicionar nova avaliação -->
        <button @click="irParaNovaAvaliacao" class="btn-nova-avaliacao">
          Eviar Nova Avaliação
        </button>
      </div>
    </section>

    <PortfolioSection />
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import PortfolioSection from './atomos/PortfolioSection.vue';
import Footer from './atomos/Footer.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'FeedbackView',
  components: {
    Header,
    PortfolioSection,
    Footer,
  },
  setup() {
    const router = useRouter();

    // Lista de avaliações
    const avaliacoes = ref([
      {
        nome: 'João Silva',
        empresa: 'CEO da Empresa X',
        avaliacao: 'A equipe da <span class="skillT">Skill Technology</span> foi incrível! Eles entenderam exatamente o que precisávamos e entregaram um site moderno e funcional. Recomendo a todos que buscam qualidade e profissionalismo.',
        foto: '/src/assets/img/image/user4.png',
      },
      {
        nome: 'João Silvaw',
        empresa: 'CEO da Empresa Xw',
        avaliacao: 'A equipe da <span class="skillT">Skill Technology</span> foi incrível! Eles entenderam exatamente o que precisávamos e entregaram um site moderno e funcional. Recomendo a todos que buscam qualidade e profissionalismo.',
        foto: '/src/assets/img/image/user1.png',
      },
      {
        nome: 'Maria Souza',
        empresa: 'Fundadora da Startup Y',
        avaliacao: 'Fiquei impressionado com a atenção aos detalhes e o suporte pós-entrega. Nosso site não só ficou lindo, mas também aumentou nossas conversões. Parabéns pelo excelente trabalho!',
        foto: '/src/assets/img/image/user2.png',
      },
      {
        nome: 'Carlos Oliveira',
        empresa: 'Diretor da Empresa Z',
        avaliacao: 'Trabalhar com a <span class="skillT">Skill Technology</span> foi uma experiência incrível. Eles são rápidos, eficientes e sempre abertos a feedback. Nosso site superou todas as expectativas!',
        foto: '/src/assets/img/image/user3.png',
      },
    ]);

    // Função para adicionar uma nova avaliação
    const adicionarAvaliacao = (novaAvaliacao) => {
      avaliacoes.value.push(novaAvaliacao);
    };

    // Função para redirecionar para a página de nova avaliação
    const irParaNovaAvaliacao = () => {
      router.push('/nova-avaliacao');
    };

    return {
      avaliacoes,
      adicionarAvaliacao,
      irParaNovaAvaliacao,
    };
  },
};
</script>
<style scoped>
/* Estilos globais já estão sendo aplicados */
.avaliacoes-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.avaliacao-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.avaliacao-texto {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

.avaliacao-autor {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.autor-foto {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.autor-info {
  display: flex;
  flex-direction: column;
}

.autor-nome {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.autor-empresa {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

.btn-nova-avaliacao {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-nova-avaliacao:hover {
  background-color: #0056b3;
}
</style>