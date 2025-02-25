<template>
    <Header />
    <div>
      <!-- Hero Section with Slider -->
      <section class="hero-slider">
        <div class="slider-container">
          <div v-for="(slide, index) in slides" :key="index" :class="['slide', { active: currentSlide === index }]">
            <div class="slide-content">
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.description }}</p>
              <a href="#products" class="cta-button">{{ slide.buttonText }}</a>
            </div>
            <div class="slide-bg" :style="{ backgroundImage: `url(${slide.backgroundImage})` }"></div>
          </div>
        </div>
        <div class="slider-controls">
          <button @click="prevSlide" class="prev-slide">❮</button>
          <button @click="nextSlide" class="next-slide">❯</button>
        </div>
      </section>
  
      <!-- Products/Services Section -->
      <section id="products" class="products-section">
        <div class="section-header">
          <h2>Nossas Soluções de IA</h2>
          <div class="category-filter">
            <button
              v-for="category in categories"
              :key="category"
              :class="['filter-btn', { active: selectedCategory === category }]"
              @click="filterProducts(category)"
            >
              {{ category }}
            </button>
          </div>
        </div>
        <div class="products-grid">
          <div v-for="product in filteredProducts" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.title" class="product-image" />
            <div class="product-content">
              <h3 class="product-title">{{ product.title }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-price">
                R$ {{ product.price.toLocaleString('pt-BR') }}
                <small>/mês</small>
              </div>
              <button class="product-button">
                <router-link :to="`/produtos/${product.id}`" class="btn-carrinho">
                  <span>Detalhes do Produto</span>
                </router-link>
                
                <img src="https://api.iconify.design/heroicons:shopping-cart.svg" alt="Cart" />
              </button>
            </div>
          </div>
        </div>
      </section>     
        
    </div>
    <Footer />
  </template>
  
  <script>
  import Header from './atomos/Header.vue';
  import Footer from './atomos/Footer.vue';
  export default {
    name: 'EcommerceView',
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        // Dados do slider
        slides: [
          {
            title: "Transforme Seu Negócio com IA",
            description: "Soluções inteligentes para automatizar e escalar seu negócio",
            buttonText: "Explorar Soluções",
            backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
          },
          {
            title: "Automatize Processos com IA",
            description: "Tecnologia de ponta para otimizar suas operações",
            buttonText: "Descobrir Mais",
            backgroundImage: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D5",
          },
          {
            title: "Automatize Processos com IA",
            description: "Tecnologia de ponta para otimizar suas operações",
            buttonText: "Descobrir Mais",
            backgroundImage: "https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        currentSlide: 0,
  
        // Dados dos produtos
        products: [
          {
            id: 1,
            title: "AI Chatbot Enterprise",
            description: "Chatbot avançado com IA para atendimento ao cliente 24/7, integração multicanal e análise de sentimentos.",
            price: 2499.99,
            category: "chatbot",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          },
          {
            id: 2,
            title: "Análise Preditiva de Dados",
            description: "Sistema de análise de dados com IA para previsão de tendências de mercado e comportamento do consumidor.",
            price: 3999.99,
            category: "analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          },
          {
            id: 3,
            title: "Marketing Automation Pro",
            description: "Plataforma de automação de marketing com IA para personalização de campanhas e otimização de conversão.",
            price: 1999.99,
            category: "marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
          },
          {
            id: 4,
            title: "Smart Content Generator",
            description: "Gerador de conteúdo inteligente com IA para blogs, redes sociais e email marketing.",
            price: 899.99,
            category: "marketing",
            image: "https://images.unsplash.com/photo-1542435503-956c469947f6",
          },
          {
            id: 5,
            title: "Business Intelligence Suite",
            description: "Suite completa de BI com dashboards inteligentes e relatórios automatizados.",
            price: 4999.99,
            category: "analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          },
          {
            id: 6,
            title: "Customer Service Bot",
            description: "Chatbot especializado em suporte técnico com aprendizado contínuo e integração com CRM.",
            price: 1499.99,
            category: "chatbot",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          },
        ],
        selectedCategory: "all",
        categories: ["all", "chatbot", "analytics", "marketing"],
      };
    },
    computed: {
      // Filtra os produtos com base na categoria selecionada
      filteredProducts() {
        if (this.selectedCategory === "all") {
          return this.products;
        }
        return this.products.filter((product) => product.category === this.selectedCategory);
      },
    },
    methods: {
      // Navegação do slider
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      },
      // Filtra os produtos por categoria
      filterProducts(category) {
        this.selectedCategory = category;
      },
    },
    mounted() {
      // Auto-avanço do slider
      setInterval(this.nextSlide, 5000);
    },
  };
  </script>
  
  <style scoped>
  
  /* Adicione seus estilos aqui, se necessário */
  .btn-carrinho {
    text-decoration: none;
    color: inherit;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  </style>