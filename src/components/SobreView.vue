<template>
  <div>
    <Header />
    <main>
      <!-- Hero Section -->
      <section class="institutional-hero">
        <h1>Sobre <span class="highlight">Nós</span></h1>
        <p>Conheça nossa história, nossa equipe e o que nos torna únicos no mercado de tecnologia.</p>
      </section>

      <!-- Main Content -->
      <div class="institutional-content">
        <!-- Company Introduction -->
        <section class="content-section animate-on-scroll">
          <div class="company-intro">
            <div class="intro-text">
              <h2>Transformando Ideias em Realidade Digital</h2>
              <p>Desde 2014, a Skill Technology tem sido pioneira em soluções digitais inovadoras. Nossa jornada é marcada por desafios superados e conquistas compartilhadas com nossos clientes.</p>
              <router-link to="/contato" class="cta-button">Fale Conosco</router-link>
            </div>
            <div class="intro-image">
              <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Skill Technology Office" />
            </div>
          </div>
        </section>

        <!-- Timeline Section -->
        <section class="content-section animate-on-scroll">
          <h2>Nossa História</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-content">
                <h3>2014</h3>
                <h4>Fundação</h4>
                <p>Início das operações com foco em desenvolvimento web.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-content">
                <h3>2016</h3>
                <h4>Expansão</h4>
                <p>Ampliação dos serviços para incluir aplicativos mobile.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-content">
                <h3>2018</h3>
                <h4>Reconhecimento</h4>
                <p>Prêmio de Melhor Empresa de Tecnologia do Ano.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-content">
                <h3>2020</h3>
                <h4>Inovação</h4>
                <p>Lançamento da divisão de Inteligência Artificial.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-content">
                <h3>2023</h3>
                <h4>Presente</h4>
                <p>Líder em soluções digitais integradas.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Team Section -->
        <section class="content-section animate-on-scroll">
          <h2>Nossa Equipe</h2>
          <div class="team-grid">
            <div class="team-member">
              <div class="member-image">
                <img src="/src/assets/img/image/user1.png" alt="Maciel Barbosa" />
              </div>
              <h3>Maciel Barbosa</h3>
              <p class="member-role">CEO & Fundador</p>
              <div class="social-links">
                <a href="#" target="_blank"><img src="https://api.iconify.design/mdi:linkedin.svg" alt="LinkedIn" /></a>
                <a href="#" target="_blank"><img src="https://api.iconify.design/mdi:twitter.svg" alt="Twitter" /></a>
              </div>
            </div>
            <div class="team-member">
              <div class="member-image">
                <img src="/src/assets/img/image/user2.png" alt="Ana Silva" />
              </div>
              <h3>Ana Silva</h3>
              <p class="member-role">CTO</p>
              <div class="social-links">
                <a href="#" target="_blank"><img src="https://api.iconify.design/mdi:linkedin.svg" alt="LinkedIn" /></a>
                <a href="#" target="_blank"><img src="https://api.iconify.design/mdi:github.svg" alt="GitHub" /></a>
              </div>
            </div>
            <div class="team-member">
              <div class="member-image">
                <img src="/src/assets/img/image/user3.png" alt="Carlos Santos" />
              </div>
              <h3>Carlos Santos</h3>
              <p class="member-role">Diretor de Projetos</p>
              <div class="social-links">
                <a href="#" target="_blank"><img src="https://api.iconify.design/mdi:linkedin.svg" alt="LinkedIn" /></a>
                <a href="#" target="_blank"><img src="https://api.iconify.design/mdi:instagram.svg" alt="Instagram" /></a>
              </div>
            </div>
          </div>
        </section>

        <!-- Statistics Section -->
        <section class="content-section animate-on-scroll stats-section">
          <h2>Nossos Números</h2>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Projetos Entregues</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Profissionais</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">Prêmios</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Clientes Satisfeitos</div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';

export default {
  name: 'SobreView',
  components: {
    Header,
    Footer
  },
  mounted() {
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

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      observer.observe(section);
    });
  }
};
</script>

<style scoped>
/* Variáveis de cores */
:root {
  --inst-bg: #ffffff;
  --inst-text: #1A1D1F;
  --inst-gray: #666666;
  --inst-light-gray: #f8f9fa;
  --inst-primary: #0052FF;
  --inst-secondary: #E5E7EB;
  --inst-accent: #FFD60A;
  --inst-card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --inst-bg: #1A1D1F;
  --inst-text: #ffffff;
  --inst-gray: #9CA3AF;
  --inst-light-gray: #2D3748;
  --inst-secondary: #4A5568;
  --inst-card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

/* Hero Section */
.institutional-hero {
  text-align: center;
  padding: 6rem 5%;
  background: var(--inst-light-gray);
}

.institutional-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.institutional-hero .highlight {
  color: var(--inst-primary);
}

.institutional-hero p {
  color: var(--inst-gray);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
}

/* Main Content */
.institutional-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 5%;
}

.content-section {
  margin-bottom: 6rem;
}

.content-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--inst-text);
}

/* Company Introduction */
.company-intro {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.intro-text {
  flex: 1;
}

.intro-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--inst-gray);
  margin-bottom: 2rem;
}

.cta-button {
  padding: 12px 24px;
  background: var(--inst-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #0041cc;
}

.intro-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: var(--inst-card-shadow);
}

/* Timeline Section */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--inst-secondary);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
  text-align: right;
}

.timeline-content {
  background: var(--inst-light-gray);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--inst-card-shadow);
  flex: 1;
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--inst-primary);
}

.timeline-content h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--inst-text);
}

.timeline-content p {
  font-size: 1rem;
  color: var(--inst-gray);
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
  background: var(--inst-light-gray);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--inst-card-shadow);
}

.member-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.team-member h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--inst-text);
}

.member-role {
  font-size: 1rem;
  color: var(--inst-gray);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-links img {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.social-links img:hover {
  transform: scale(1.1);
}

/* Statistics Section */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  background: var(--inst-light-gray);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--inst-card-shadow);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--inst-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--inst-gray);
}

/* Responsive Design */
@media (max-width: 768px) {
  .company-intro {
    flex-direction: column;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    flex-direction: column;
    text-align: left;
  }

  .timeline-item:nth-child(odd) {
    flex-direction: column;
    text-align: left;
  }
}
</style>