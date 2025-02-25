<template>
  <Header />
  <div class="product-details" v-if="produto">
    <!-- Breadcrumb (Navegação) -->
    <nav class="breadcrumb">
      <router-link to="/">Home</router-link> /
      <router-link to="/produtos">Produtos</router-link> /
      <span>{{ product.title }}</span>
    </nav>

    <!-- Detalhes do Produto -->
    <div class="product-container">
      <!-- Imagem do Produto -->
      <div class="product-image">
        <img :src="produto.image" :alt="produto.title" class="produto-imagem" />
      </div>

      <!-- Informações do Produto -->
      <div class="product-info">
        <h1 class="product-title">{{ produto.title }}</h1>
        <p class="product-price">
          R$ {{ produto.price.toLocaleString('pt-BR') }}
          <small>/mês</small>
        </p>
        <p class="product-description">{{ produto.description }}</p>

        <!-- Botões de Ação -->
        <div class="product-actions">
          <button class="cta-button" @click="addToCart">
            <img src="https://api.iconify.design/heroicons:shopping-cart.svg" alt="Carrinho" />
            Adicionar ao Carrinho
          </button>
          <button class="cta-button secondary" @click="goBack">
            Voltar para Produtos
          </button>
        </div>

        <!-- Detalhes Adicionais -->
        <div class="additional-details">
          <h2>Detalhes Técnicos</h2>
          <ul>
            <li><strong>Categoria:</strong> {{ product.category }}</li>
            <li><strong>Integração:</strong> Compatível com principais CRMs e ERPs.</li>
            <li><strong>Suporte:</strong> 24/7 via chat, e-mail e telefone.</li>
            <li><strong>Garantia:</strong> 30 dias de satisfação garantida.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Depoimentos -->
    <div class="testimonials">
      <h2>O que nossos clientes dizem</h2>
      <div class="testimonial-list">
        <div class="testimonial">
          <p>"A solução de IA transformou nosso atendimento ao cliente. Recomendo!"</p>
          <span>- João Silva, CEO da Empresa X</span>
        </div>
        <div class="testimonial">
          <p>"Fácil de implementar e com resultados incríveis em poucas semanas."</p>
          <span>- Maria Souza, Gerente de Marketing</span>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';

export default {
  name: 'ProdutoPage',
  components: {
    Header,
    Footer,
  },
  props: ['id'], // Recebe o ID da rota
  data() {
    return {
      produtos: [
        {
          id: 1,
          title: "AI Chatbot Enterprise",
          description: "Chatbot avançado com IA para atendimento ao cliente 24/7, integração multicanal e análise de sentimentos.",
          price: 2499.99,
          category: "chatbot",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          rating: 4.5,
        
          brand: "TechAI",
        },
        {
          id: 2,
          title: "Análise Preditiva de Dados",
          description: "Sistema de análise de dados com IA para previsão de tendências de mercado e comportamento do consumidor.",
          price: 3999.99,
          category: "analytics",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          rating: 4.7,
          stock: 5,
          brand: "DataInsights",
        },
        {
          id: 3,
          title: "Marketing Automation Pro",
          description: "Plataforma de automação de marketing com IA para personalização de campanhas e otimização de conversão.",
          price: 1999.99,
          category: "marketing",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          rating: 4.3,
          stock: 15,
          brand: "MarketMasters",
        },
      ],
      produto: null,
    };
  },
  mounted() {
    this.buscarProduto();
  },
  methods: {
    buscarProduto() {
      this.produto = this.produtos.find((p) => p.id === parseInt(this.id));
    },
  },
};
</script>
  
  <style scoped>
  .product-details {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .breadcrumb {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .breadcrumb a {
    color: #666;
    text-decoration: none;
  }
  
  .breadcrumb a:hover {
    text-decoration: underline;
  }
  
  .product-container {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap; /* Para responsividade */
  }
  
  .product-image {
    flex: 1;
    max-width: 400px; /* Diminuindo o tamanho da imagem */
  }
  
  .product-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-info {
    flex: 2; /* Mais espaço para a descrição */
    min-width: 300px; /* Evita que fique muito pequeno em telas estreitas */
  }
  
  .product-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .product-price {
    font-size: 1.5rem;
    color: #007bff; /* Cor destacada para o preço */
    margin-bottom: 1.5rem;
  }
  
  .product-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 2rem;
    background-color: #f9f9f9; /* Fundo para destacar a descrição */
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap; /* Para responsividade */
  }
  
  .cta-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .cta-button.secondary {
    background-color: #6c757d;
  }
  
  .cta-button:hover {
    background-color: #0056b3; /* Efeito hover mais escuro */
    transform: translateY(-2px); /* Efeito de levantar */
  }
  
  .cta-button:active {
    transform: translateY(0); /* Efeito de pressionar */
  }
  
  .additional-details {
    margin-top: 2rem;
  }
  
  .additional-details h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .additional-details ul {
    list-style: none;
    padding: 0;
  }
  
  .additional-details li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #555;
  }
  
  .testimonials {
    margin-top: 4rem;
  }
  
  .testimonials h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .testimonial-list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap; /* Para responsividade */
  }
  
  .testimonial {
    background-color: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
    min-width: 250px; /* Evita que fique muito pequeno em telas estreitas */
  }
  
  .testimonial p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }
  
  .testimonial span {
    display: block;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #777;
    text-align: right;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .product-container {
      flex-direction: column;
      align-items: center;
    }
  
    .product-image {
      max-width: 100%;
    }
  
    .product-info {
      width: 100%;
    }
  
    .product-actions {
      flex-direction: column;
      gap: 0.5rem;
    }
  
    .cta-button {
      width: 100%;
      justify-content: center;
    }
  
    .testimonial-list {
      flex-direction: column;
    }
  }
  
  @media (max-width: 480px) {
    .product-title {
      font-size: 1.5rem;
    }
  
    .product-price {
      font-size: 1.25rem;
    }
  
    .product-description {
      font-size: 1rem;
      padding: 1rem;
    }
  
    .additional-details h2 {
      font-size: 1.25rem;
    }
  
    .testimonials h2 {
      font-size: 1.25rem;
    }
  }
  </style>s