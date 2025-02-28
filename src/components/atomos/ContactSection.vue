<!-- src/components/ContactSection.vue -->
<template>
  <section class="contact">
    <div class="contact-card">
      <h2>Entre em Contato<br></h2>
      <p>Se tiver qualquer dúvida sobre o desenvolvimento do seu projeto, entre em contato gratuitamente!</p>
      <div class="contact-form">
        <input type="email" placeholder="Digite seu e-mail" v-model="email" required>
        <input type="text" placeholder="Assunto" v-model="subject" required>
        <textarea placeholder="Digite sua mensagem" v-model="message" required></textarea>
        <button class="cta-button" @click="handleSubmit">Enviar Mensagem</button>
      </div>
    </div>

    <!-- Overlay de confirmação -->
    <div v-if="showOverlay" class="overlay" @click="closeOverlay">
      <div class="overlay-content" @click.stop>
        <span><img src="/src/assets/img/svg/confirm.svg" width="80px" alt=""></span>
        <p style="text-transform: capitalize;">Obrigado por entrar em contato! Em breve retornaremos.</p>
        <SigaNos />

        
      </div>
    </div>
  </section>
</template>

<script>
import SigaNos from './SigaNos.vue';
export default {
  name: 'AplicativosView',
  components: {
    SigaNos,
    
  },
  data() {
    return {
      email: '',
      subject: '',
      message: '',
      showOverlay: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.email || !this.subject || !this.message) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const emailData = {
        to: 'stwcontato@hotmail.com',
        subject: this.subject,
        body: `E-mail: ${this.email}\n\nMensagem: ${this.message}`,
      };

      try {
        // Simulação de envio de e-mail (substitua por uma API real)
        await this.sendEmail(emailData);
        this.showOverlay = true; // Exibe a overlay de confirmação
      } catch (error) {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      }
    },
    async sendEmail(emailData) {
      // Simulação de uma requisição de envio de e-mail
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('E-mail enviado:', emailData);
          resolve();
        }, 1000);
      });
    },
    closeOverlay() {
      this.showOverlay = false; // Fecha a overlay
      this.resetForm(); // Reseta os campos do formulário
    },
    resetForm() {
      this.email = '';
      this.subject = '';
      this.message = '';
    },
  },
};
</script>

<style scoped>
/* Contact Section */
.contact {
  padding: 5rem 5%;
}

.contact-card {
  background: var(--dark-bg);
  color: white;
  padding: 4rem;
  border-radius: 24px;
  text-align: center;
}

.contact-card h2 {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.contact-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form input {
  flex: 1;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.contact-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
p{
  text-transform: capitalize;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form textarea {
  height: 150px;
  resize: vertical;
  background-color: #2a2b2e;
  color: #fff;
}

.cta-button {
  padding: 0.75rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #0056b3;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.overlay-content .icon {
  font-size: 3rem;
  color: #28a745;
}

.overlay-content p {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #333;
}
</style>