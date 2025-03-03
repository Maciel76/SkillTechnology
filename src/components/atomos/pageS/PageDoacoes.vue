<template>
  <div>
    <Header />
    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Financie o Futuro da Tecnologia</h1>
          <p>Sua contribuição ajuda a impulsionar projetos inovadores que transformam o mundo.</p>
          <button class="cta-button" @click="scrollToDonation">Apoie Agora</button>
        </div>
      </section>

      <!-- About Section -->
      <section class="about-section">
        <h2>Sobre Nós</h2>
        <p>
          Somos uma agência de tecnologia dedicada a desenvolver soluções inovadoras para problemas reais.
          Com sua ajuda, podemos financiar projetos que impactam positivamente a sociedade.
        </p>
      </section>

      <!-- Projects Section -->
      <section class="projects-section">
        <h2>Projetos em Andamento</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Educação Digital</h3>
            <p>Plataforma de ensino online para comunidades carentes.</p>
            <span class="project-status">80% concluído</span>
          </div>
          <div class="project-card">
            <h3>Energia Sustentável</h3>
            <p>Sistema de monitoramento de energia solar em tempo real.</p>
            <span class="project-status">50% concluído</span>
          </div>
          <div class="project-card">
            <h3>Saúde Digital</h3>
            <p>Aplicativo para agendamento de consultas médicas.</p>
            <span class="project-status">30% concluído</span>
          </div>
        </div>
      </section>

      <!-- Donation Section -->
      <section class="donation-section" id="donation">
        <h2>Faça Sua Doação</h2>
        <form @submit.prevent="submitDonation" class="donation-form">
          <div class="form-group">
            <label for="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              placeholder="Seu nome completo"
            >
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="seu@email.com"
            >
          </div>
          <div class="form-group">
            <label for="amount">Valor da Doação</label>
            <select id="amount" v-model="formData.amount" required>
              <option value="">Selecione um valor</option>
              <option value="50">R$ 50,00</option>
              <option value="100">R$ 100,00</option>
              <option value="200">R$ 200,00</option>
              <option value="500">R$ 500,00</option>
              <option value="custom">Outro valor</option>
            </select>
            <input
              v-if="formData.amount === 'custom'"
              type="number"
              v-model="formData.customAmount"
              placeholder="Digite o valor desejado"
              min="1"
              step="1"
            >
          </div>
          <div class="form-group">
            <label for="payment">Método de Pagamento</label>
            <select id="payment" v-model="formData.paymentMethod" required>
              <option value="">Selecione o método de pagamento</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="paypal">PayPal</option>
              <option value="boleto">Boleto Bancário</option>
              <option value="pix">PIX</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Mensagem (opcional)</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              placeholder="Deixe uma mensagem de apoio"
            ></textarea>
          </div>
          <button type="submit" class="submit-button">Doar Agora</button>
        </form>
      </section>

      <!-- Results Section -->
      <section class="results-section">
        <h2>Resultados Alcançados</h2>
        <div class="results-grid">
          <div class="result-card">
            <h3>+1000</h3>
            <p>Pessoas impactadas</p>
          </div>
          <div class="result-card">
            <h3>R$ 500.000</h3>
            <p>Investidos em projetos</p>
          </div>
          <div class="result-card">
            <h3>+20</h3>
            <p>Projetos concluídos</p>
          </div>
        </div>
      </section>

      <!-- Partners Section -->
      <section class="partners-section">
        <h2>Nossos Parceiros</h2>
        <div class="partners-grid">
          <img src="https://via.placeholder.com/150" alt="Parceiro 1">
          <img src="https://via.placeholder.com/150" alt="Parceiro 2">
          <img src="https://via.placeholder.com/150" alt="Parceiro 3">
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <h2>Entre em Contato</h2>
        <form @submit.prevent="submitContact" class="contact-form">
          <div class="form-group">
            <label for="contact-name">Nome Completo</label>
            <input type="text" id="contact-name" v-model="contactData.name" required>
          </div>
          <div class="form-group">
            <label for="contact-email">Email</label>
            <input type="email" id="contact-email" v-model="contactData.email" required>
          </div>
          <div class="form-group">
            <label for="contact-message">Mensagem</label>
            <textarea id="contact-message" v-model="contactData.message" rows="4"></textarea>
          </div>
          <button type="submit" class="submit-button">Enviar</button>
        </form>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';

export default {
  name: 'PageDoacoes',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        amount: '',
        customAmount: '',
        paymentMethod: '',
        message: ''
      },
      contactData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    scrollToDonation() {
      document.getElementById('donation').scrollIntoView({ behavior: 'smooth' });
    },
    submitDonation() {
      console.log('Doação enviada:', this.formData);
      alert('Obrigado por sua doação!');
      this.resetForm();
    },
    submitContact() {
      console.log('Mensagem enviada:', this.contactData);
      alert('Mensagem enviada com sucesso!');
      this.contactData = { name: '', email: '', message: '' };
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        amount: '',
        customAmount: '',
        paymentMethod: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3 {
  color: #2c3e50;
}

p {
  color: #34495e;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://source.unsplash.com/1600x900/?technology');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 6rem 5%;
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #2980b9;
}

/* About Section */
.about-section {
  padding: 4rem 5%;
  text-align: center;
  background: #f9f9f9;
}

/* Projects Section */
.projects-section {
  padding: 4rem 5%;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-status {
  display: block;
  margin-top: 1rem;
  color: #27ae60;
  font-weight: bold;
}

/* Donation Section */
.donation-section {
  padding: 4rem 5%;
  background: #f9f9f9;
  text-align: center;
}

.donation-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: #2980b9;
}

/* Results Section */
.results-section {
  padding: 4rem 5%;
  text-align: center;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.result-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.result-card h3 {
  font-size: 2rem;
  color: #3498db;
}

/* Partners Section */
.partners-section {
  padding: 4rem 5%;
  text-align: center;
  background: #f9f9f9;
}

.partners-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.partners-grid img {
  max-width: 150px;
}

/* Contact Section */
.contact-section {
  padding: 4rem 5%;
  text-align: center;
}

.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .projects-grid,
  .results-grid {
    grid-template-columns: 1fr;
  }
}
</style>