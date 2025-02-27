<template>
    <main>
      <!-- Seção Hero -->
  
      <!-- Navegação de Categorias -->
      <section class="pricing-categories" id="pricingCategories">
        <button
          v-for="(button, index) in categoryButtons"
          :key="index"
          :class="['category-button', { active: activeCategory === button.category }]"
          @click="setActiveCategory(button.category)"
        >
          <img :src="button.icon" :alt="button.label" />
          {{ button.label }}
        </button>
      </section>
  
      <!-- Planos -->
      <section class="pricing-plans" id="pricingPlans">
        <div v-for="(plan, index) in filteredPlans" :key="index" class="plan-card">
          <div class="plan-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-price">{{ plan.price }}</div>
            <div class="plan-period">{{ plan.period }}</div>
          </div>
          <div class="plan-features">
            <div v-for="(feature, i) in plan.features" :key="i" class="feature-item">
              <img src="https://api.iconify.design/heroicons:check-circle.svg" alt="Incluído" />
              <span>{{ feature }}</span>
            </div>
          </div>
          <button class="cta-button" @click="showPlanDetails(plan)">Contratar Agora</button>
        </div>
      </section>
  
      <!-- Modal de Detalhes do Plano -->
      <div v-if="isModalOpen" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-modal" @click="closeModal">&times;</button>
          <div class="modal-body">
            <h2>{{ selectedPlan.name }}</h2>
            <div class="plan-price">{{ selectedPlan.price }}</div>
            <p class="plan-description">{{ selectedPlan.description }}</p>
            <div class="plan-features">
              <h3>Recursos Inclusos:</h3>
              <div v-for="(feature, i) in selectedPlan.features" :key="i" class="feature-item">
                <img src="https://api.iconify.design/heroicons:check-circle.svg" alt="Incluído" />
                <span>{{ feature }}</span>
              </div>
            </div>
            <button class="cta-button">Solicitar Orçamento</button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'PricingComponent',
    data() {
      return {
        activeCategory: 'websites',
        isModalOpen: false,
        selectedPlan: null,
        categoryButtons: [
          { category: 'websites', label: 'Websites', icon: '/src/assets/img/svg/globe.svg' },
          { category: 'apps', label: 'Aplicativos', icon: '/src/assets/img/svg/phone.svg' },
          { category: 'design', label: 'UI/UX Design', icon: '/src/assets/img/svg/brush.svg' },
          { category: 'illustration', label: 'Ilustração', icon: '/src/assets/img/svg/pincel.svg' },
          { category: 'ecommerce', label: 'E-commerce', icon: '/src/assets/img/svg/carrinho.svg' },
          { category: 'consultoria', label: 'Consultoria', icon: '/src/assets/img/svg/chat.svg' },
        ],
        pricingData: {
            websites: [
        {
            name: 'Plano Básico',
            price: 'R$ 500',
            period: 'One Page',
            features: [
                'Design Responsivo',
                'Otimização para SEO',
                'Formulário de Contato',
                'Integração com Redes Sociais',
                'Hospedagem por 1 ano'
            ],
            description: 'Ideal para profissionais liberais e pequenos negócios que precisam de uma presença online profissional.'
        },
        {
            name: 'Plano Intermediário',
            price: 'R$ 1.200',
            period: 'Site Institucional',
            features: [
                'Até 5 páginas personalizadas',
                'Blog integrado',
                'Painel administrativo',
                'Otimização avançada SEO',
                'Suporte técnico prioritário',
                'Hospedagem por 1 ano'
            ],
            description: 'Perfeito para empresas que precisam de um site completo com mais funcionalidades e conteúdo dinâmico.'
        },
        {
            name: 'Plano Avançado',
            price: 'R$ 2.500',
            period: 'Site Personalizado',
            features: [
                'Páginas ilimitadas',
                'Design exclusivo',
                'Sistema de gestão de conteúdo',
                'Integrações personalizadas',
                'Relatórios de performance',
                'Suporte 24/7',
                'Hospedagem premium'
            ],
            description: 'Solução completa para grandes empresas que necessitam de um site robusto e totalmente personalizado.'
        }
      ],
      apps: [
        {
            name: 'Plano Essencial',
            price: 'R$ 3.000',
            period: 'App Simples',
            features: [
                'Design intuitivo',
                'Desenvolvimento nativo',
                'Funcionalidades básicas',
                'Publicação nas lojas',
                'Suporte técnico'
            ],
            description: 'Ideal para MVP e aplicativos com funcionalidades essenciais.'
        },
        {
            name: 'Plano Completo',
            price: 'R$ 7.000',
            period: 'App com Painel',
            features: [
                'Design premium',
                'Desenvolvimento avançado',
                'Painel administrativo',
                'APIs personalizadas',
                'Análise de dados',
                'Suporte prioritário'
            ],
            description: 'Perfeito para aplicativos complexos que necessitam de backend robusto e funcionalidades avançadas.'
        }
     ],
     design: [
        {
            name: 'Plano Start',
            price: 'R$ 800',
            period: 'Landing Page',
            features: [
                'Design responsivo',
                'Protótipo interativo',
                'Até 2 revisões',
                'Arquivos fonte',
                'Guia de estilo'
            ],
            description: 'Perfeito para landing pages e sites simples que precisam de um design profissional e atraente.'
        },
        {
            name: 'Plano Pro',
            price: 'R$ 2.000',
            period: 'Design Completo',
            features: [
                'UX Research',
                'Wireframes',
                'Design System',
                'Protótipo avançado',
                'Até 5 revisões',
                'Documentação completa'
            ],
            description: 'Ideal para projetos complexos que necessitam de pesquisa de usuário e design system completo.'
        }
    ],
    illustration: [
        {
            name: 'Pacote Básico',
            price: 'R$ 300',
            period: 'Por ilustração',
            features: [
                'Ilustração vetorial',
                'Até 2 revisões',
                'Arquivos editáveis',
                'Uso comercial',
                'Entrega em 5 dias'
            ],
            description: 'Ideal para empresas que precisam de ilustrações pontuais para seu conteúdo digital.'
        },
        {
            name: 'Pacote Premium',
            price: 'R$ 1.500',
            period: 'Kit com 6 ilustrações',
            features: [
                'Ilustrações personalizadas',
                'Estilo consistente',
                'Até 3 revisões por peça',
                'Arquivos em alta resolução',
                'Uso comercial ilimitado',
                'Entrega em 15 dias'
            ],
            description: 'Perfeito para empresas que precisam de um conjunto de ilustrações com identidade visual consistente.'
        }
    ],
    ecommerce: [
        {
            name: 'Plano Básico',
            price: 'R$ 2.000',
            period: 'Loja Virtual Padrão',
            features: [
                'Até 100 produtos',
                'Integração com PagSeguro/Mercado Pago',
                'Painel administrativo',
                'Relatórios básicos',
                'Certificado SSL',
                'Suporte por 3 meses'
            ],
            description: 'Ideal para pequenos negócios que estão começando no e-commerce.'
        },
        {
            name: 'Plano Avançado',
            price: 'R$ 4.500',
            period: 'Loja Personalizada',
            features: [
                'Produtos ilimitados',
                'Design exclusivo',
                'Múltiplas formas de pagamento',
                'Integração com ERP',
                'Marketplace multivendedor',
                'Relatórios avançados',
                'Suporte prioritário'
            ],
            description: 'Solução completa para empresas que precisam de uma plataforma robusta de e-commerce.'
        }
    ],
    consultoria: [
        {
            name: 'Consultoria Pontual',
            price: 'R$ 300',
            period: 'Por hora',
            features: [
                'Análise de problemas',
                'Recomendações técnicas',
                'Relatório detalhado',
                'Suporte por email',
                'Follow-up em 30 dias'
            ],
            description: 'Ideal para empresas que precisam de orientação específica em projetos digitais.'
        },
        {
            name: 'Consultoria Mensal',
            price: 'R$ 2.000',
            period: 'Por mês',
            features: [
                'Até 10 horas mensais',
                'Reuniões semanais',
                'Análise de métricas',
                'Planejamento estratégico',
                'Suporte prioritário',
                'Relatórios mensais'
            ],
            description: 'Perfeito para empresas que precisam de acompanhamento contínuo em seus projetos digitais.'
        }
    ]

          // Outras categorias...
        },
      };
    },
    computed: {
      filteredPlans() {
        return this.pricingData[this.activeCategory] || [];
      },
    },
    methods: {
      setActiveCategory(category) {
        this.activeCategory = category;
      },
      showPlanDetails(plan) {
        this.selectedPlan = plan;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.selectedPlan = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos do componente */
  /* Pricing Page Styles */
:root {
    --pricing-bg: #ffffff;
    --pricing-text: #1A1D1F;
    --pricing-gray: #666666;
    --pricing-light-gray: #f8f9fa;
    --pricing-primary: #0052FF;
    --pricing-secondary: #E5E7EB;
    --pricing-accent: #FFD60A;
    --pricing-success: #10B981;
    --pricing-card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Dark Mode Colors */
[data-theme="dark"] {
    --pricing-bg: #1A1D1F;
    --pricing-text: #ffffff;
    --pricing-gray: #9CA3AF;
    --pricing-light-gray: #2D3748;
    --pricing-secondary: #4A5568;
    --pricing-card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.pricing-page {
    background-color: var(--pricing-bg);
    color: var(--pricing-text);
}


/* Category Navigation */
.pricing-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 1rem;
}

.category-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.category-button img {
  width: 24px;
  height: 24px;
}

.category-button.active {
  border-color: #007bff;
  background: #f0f8ff;
  color: #007bff;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .pricing-categories {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 0.5rem;
  }

  .category-button {
    width: 100%;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .category-button img {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .pricing-categories {
    gap: 0.5rem;
  }

  .category-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  .category-button img {
    width: 18px;
    height: 18px;
  }
}

/* Pricing Plans */
.pricing-plans {
    padding: 4rem 5%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center; /* Centraliza os itens no grid */
    text-align: center; /* Alinha o texto dentro dos itens */
}


.plan-card {
    background: var(--pricing-light-gray);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;
}

.plan-card:hover {
    transform: translateY(-8px);
}

.plan-header {
    margin-bottom: 2rem;
}

.plan-name {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.plan-price {
    font-size: 3rem;
    font-weight: bold;
    color: var(--pricing-primary);
    margin-bottom: 1rem;
}

.plan-period {
    color: var(--pricing-gray);
}

.plan-features {
    margin: 2rem 0;
    text-align: left;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.feature-item img {
    width: 20px;
    height: 20px;
    color: var(--pricing-success);
}
nav a{
    text-decoration: none;
    list-style: none;
    color: var(--pricing-text);
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    align-items: center;
    justify-content: center;
}

.modal.active {
    display: flex;
}

.modal-content {
    background: var(--pricing-bg);
    padding: 2rem;
    border-radius: 16px;
    max-width: 600px;
    width: 90%;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
}

.close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--pricing-text);
}
.nav-controls {
    display: flex;
    gap: 10px; /* Espaço entre os itens */
}

.theme-icon{
border: none;
width: 40px;
padding: 9px;
position: relative;

}

/* Responsive Design */
@media (max-width: 768px) {
    .pricing-hero h1 {
        font-size: 2.5rem;
    }

    .pricing-categories {
        padding: 1rem;
    }

    .category-button {
        padding: 0.6rem 1rem;
    }

    .plan-card {
        padding: 1.5rem;
    }
}
/* Seção de Portfólio */
.portfolio-section {
    padding: 4rem 5%;
    background: var(--pricing-light-gray);
    text-align: center;
}

.portfolio-section h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.portfolio-section p {
    color: var(--pricing-gray);
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.portfolio-item {
    background: var(--pricing-bg);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--pricing-card-shadow);
    transition: transform 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-8px);
}

.portfolio-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.portfolio-item p {
    padding: 1rem;
    font-size: 1.1rem;
    color: var(--pricing-text);
}

/* Seção de Avaliações */
.avaliacoes-section {
    padding: 60px 0;
    background-color: #f9f9f9;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
}

.avaliacoes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.avaliacao-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.avaliacao-texto {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
}

.avaliacao-autor {
    display: flex;
    align-items: center;
}

.autor-foto {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
}

.autor-nome {
    font-size: 1.1rem;
    color: #333;
    margin: 0;
}

.autor-empresa {
    font-size: 0.9rem;
    color: #777;
    margin: 0;
}

.nova-avaliacao {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
  </style>