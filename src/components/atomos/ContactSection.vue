<!-- src/components/ContactSection.vue -->
<template>
    <section class="contact">
      <div class="contact-card">
        <h2>Tem uma ideia incrível?<br>Vamos conversar!</h2>
        <p>Se Tiver Qualquer Dúvida Sobre o Desenvolvimento do Seu Projeto, Entre em Contato Gratuitamente!</p>
        <div class="contact-form">
          <input type="email" placeholder="Digite seu e-mail" v-model="email">
          <button class="cta-button" @click="handleSubscribe">Inscrever-se</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      handleSubscribe() {
        if (this.email) {
          alert(`Obrigado por se inscrever! Entraremos em contato no e-mail: ${this.email}`);
          this.email = ''; // Limpa o campo de e-mail após o envio
        } else {
          alert('Por favor, insira um e-mail válido.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para a seção de contato */
  
  </style>