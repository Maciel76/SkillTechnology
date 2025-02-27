<template>
  <div>
    <Header />
    <main>
      <section class="institutional-hero">
        <h1>Termos de <span class="highlight">Uso</span></h1>
        <p>Leia atentamente os termos e condições para utilização dos nossos serviços.</p>
      </section>

      <div class="institutional-content">
        <div class="terms-container">
          <!-- Fixed Navigation Index -->
          <nav class="terms-nav">
            <ul>
              <li><a href="#aceitacao">1. Aceitação dos Termos</a></li>
              <li><a href="#direitos">2. Direitos Autorais</a></li>
              <li><a href="#uso">3. Uso do Site</a></li>
              <li><a href="#privacidade">4. Privacidade</a></li>
              <li><a href="#responsabilidades">5. Responsabilidades</a></li>
              <li><a href="#modificacoes">6. Modificações</a></li>
            </ul>
          </nav>

          <!-- Terms Content -->
          <div class="legal-content">
            <section id="aceitacao" class="content-section">
              <h2>1. Aceitação dos Termos</h2>
              <p>Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.</p>
            </section>

            <section id="direitos" class="content-section">
              <h2>2. Direitos Autorais</h2>
              <p>Todo o conteúdo disponível neste site, incluindo mas não se limitando a textos, gráficos, logos, imagens, é de propriedade da Skill Technology ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais.</p>
              <ul>
                <li>É proibida a reprodução sem autorização prévia</li>
                <li>O uso comercial do conteúdo é restrito</li>
                <li>As marcas registradas são protegidas por lei</li>
              </ul>
            </section>

            <section id="uso" class="content-section">
              <h2>3. Uso do Site</h2>
              <p>Você concorda em utilizar este site apenas para propósitos legais e de forma que não viole os direitos de terceiros.</p>
              <ul>
                <li>Não publicar conteúdo ofensivo ou ilegal</li>
                <li>Não tentar acessar áreas restritas do site</li>
                <li>Não interferir no funcionamento do site</li>
              </ul>
            </section>

            <section id="privacidade" class="content-section">
              <h2>4. Privacidade</h2>
              <p>Nossa política de privacidade descreve como coletamos e utilizamos suas informações pessoais. Ao utilizar nosso site, você concorda com nossa política de privacidade.</p>
            </section>

            <section id="responsabilidades" class="content-section">
              <h2>5. Responsabilidades</h2>
              <p>A Skill Technology não se responsabiliza por danos indiretos, incidentais ou consequentes decorrentes do uso ou impossibilidade de uso do site.</p>
            </section>

            <section id="modificacoes" class="content-section">
              <h2>6. Modificações</h2>
              <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entram em vigor imediatamente após sua publicação no site.</p>
            </section>

            <!-- Terms Acceptance -->
            <div class="terms-acceptance">
              <label class="checkbox-container">
                <input type="checkbox" v-model="termsAccepted">
                <span class="checkmark"></span>
                Li e concordo com os termos de uso
              </label>
              <button 
                class="accept-button" 
                :disabled="!termsAccepted"
                @click="acceptTerms"
              >
                Aceitar Termos
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';

export default {
  name: 'TermosView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      termsAccepted: false
    };
  },
  methods: {
    acceptTerms() {
      if (this.termsAccepted) {
        alert('Termos aceitos com sucesso!');
        // Aqui você pode adicionar lógica adicional, como salvar no localStorage ou enviar para uma API
      }
    }
  },
  mounted() {
    // Adiciona smooth scroll para os links de navegação
    document.querySelectorAll('.terms-nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Adiciona animação nos elementos quando aparecem na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });
  }
};
</script>

<style scoped>
@import '../assets/css/institutional.css';

.terms-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  position: relative;
}

.terms-nav {
  position: sticky;
  top: 2rem;
  height: fit-content;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.terms-nav ul {
  list-style: none;
  padding: 0;
}

.terms-nav li {
  margin-bottom: 1rem;
}

.terms-nav a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.terms-nav a:hover {
  color: #2064bd;
}

.terms-acceptance {
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  text-align: center;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.accept-button {
  background: #2064bd;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.accept-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.accept-button:hover:not(:disabled) {
  background: #1a4f96;
}

@media (max-width: 768px) {
  .terms-container {
    grid-template-columns: 1fr;
  }

  .terms-nav {
    position: relative;
    top: 0;
    margin-bottom: 2rem;
  }
}
</style>