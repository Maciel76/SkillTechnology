<template>
  <div>
    <Header />
    <main>
      <section class="institutional-hero">
        <h1>Sobre <span class="highlight">Nós</span></h1>
        <p>Conheça nossa história, nossa equipe e o que nos torna únicos no mercado de tecnologia.</p>
      </section>

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
@import '../assets/css/institutional.css';

.company-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.intro-text h2 {
  text-align: left;
  margin-bottom: 1.5rem;
}

.intro-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
  padding-left: 3rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  background: #2064bd;
  border-radius: 50%;
}

.timeline-content h3 {
  color: #2064bd;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.member-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.member-role {
  color: #666;
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

.social-links a:hover img {
  transform: translateY(-3px);
}

.stats-section {
  background: #f8f9fa;
  padding: 4rem 0;
  border-radius: 10px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2064bd;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
}

@media (max-width: 768px) {
  .company-intro {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .intro-image img {
    height: 300px;
  }
}
</style>