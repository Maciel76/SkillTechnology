<!-- src/components/HeaderView.vue -->
<template>
    <header class="pricing-header">
      <nav>
        <router-link to="/" class="logo">
          <img src="/src/assets/img/svg/logo.svg" alt="Logo" class="logo-icon" />
          <span>Skill Technology Work</span>
        </router-link>
        <div class="nav-controls">
          <button class="theme-toggle" id="themeToggle" @click="toggleTheme">
            <img :src="themeIcon" alt="Theme" class="theme-icon" />
          </button>
          <button class="cta-button">Entre em Contato</button>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'HeaderView',
    setup() {
      const themeIcon = ref('https://api.iconify.design/heroicons:moon.svg');
      const currentTheme = ref(localStorage.getItem('theme') || 'light');
  
      // Função para alternar o tema
      const toggleTheme = () => {
        const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        currentTheme.value = newTheme;
        updateThemeIcon(newTheme);
      };
  
      // Função para atualizar o ícone do tema
      const updateThemeIcon = (theme) => {
        themeIcon.value = `https://api.iconify.design/heroicons:${theme === 'light' ? 'moon' : 'sun'}.svg`;
      };
  
      // Inicializa o tema ao montar o componente
      onMounted(() => {
        document.documentElement.setAttribute('data-theme', currentTheme.value);
        updateThemeIcon(currentTheme.value);
      });
  
      return {
        themeIcon,
        toggleTheme,
      };
    },
  };
  </script>
  
  <style scoped>
  
  </style>