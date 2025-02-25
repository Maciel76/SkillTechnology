<!-- src/components/Header.vue -->
<template>
  <header>
    <nav>
      <div class="logo">
        <img src="/src/assets/img/svg/logo.svg" alt="Skill Technology Work" class="logo-icon">
        <span><router-link to="/">Skill Technology Work </router-link></span>
      </div>
      <ul class="nav-links">
        <li><router-link to="#">Blog</router-link></li>
        <li><router-link to="#">Portfolio</router-link></li>
        <li><router-link to="/planos">Planos e preços</router-link></li>
        <li><router-link to="/feedback">Clientes</router-link></li>
        <li><router-link to="/ecommerce">Loja</router-link></li>
      </ul>
      <button class="cta-button">
        <span ref="typing"></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    this.startTyping();
  },
  data() {
    return {
      texts: ["Fale Conosco", "Inicie seu Projeto", "Saiba Mais", "Entre em Contato", "Peça um Orçamento"],
      textIndex: 0,
    };
  },
  methods: {
    typeText(text, callback) {
      let charIndex = 0;
      const interval = setInterval(() => {
        this.$refs.typing.textContent = text.slice(0, charIndex++);
        if (charIndex > text.length) {
          clearInterval(interval);
          setTimeout(callback, 5000); // Espera 5 segundos antes do próximo
        }
      }, 100);
    },
    startTyping() {
      if (this.textIndex < this.texts.length) {
        this.typeText(this.texts[this.textIndex], () => {
          this.textIndex++;
          this.startTyping();
        });
      } else {
        this.$refs.typing.style.borderRight = "none"; // Remove o cursor após finalizar
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para o Header */
/* //animação do botao entre en contato */
.cta-button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 180px; /* Largura fixa */
  height: 40px;
  text-align: center;
}

#typing {
  display: inline-block;
  white-space: nowrap;
  padding-right: 5px;
  border-right: 2px solid white;
  
}

@keyframes typing {
  0% { width: 0; }
  100% { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

@keyframes erase {
  0% { width: 100%; }
  100% { width: 0; }
}
</style>