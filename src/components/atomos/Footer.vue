<!-- src/components/Footer.vue -->
<template>
    <footer>
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <img src="/src/assets/img/svg/logo.svg" alt="Logo" class="logo-icon">
            <span>Skill Technology Work</span>
          </div>
          <p>Soluções IA que Simplificam e Aceleram Resultados</p>
           <SigaNos /> <!-- Usando o componente SigaNos importando as redes sociais -->
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h3>Navegação do site</h3>
            <ul>
              <li><router-link to="/missao">Nossa missão</router-link></li>
              <li><router-link to="/sobre">Sobre</router-link></li>
              <li><router-link to="/evento">Eventos</router-link></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Nosso site</h3>
            <ul>
              <li><router-link to="/missao">Nossa missão</router-link></li>
              <li><router-link to="/sobre">Sobre</router-link></li>
              <li><router-link to="/evento">Eventos</router-link></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Informação útil</h3>
            <ul>
              <li><router-link to="/politicaPrivacidade">Política de Privacidade</router-link></li>
              <li><router-link to="/termosUso">Termos de Uso</router-link></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Contato</h3>
            <ul>
              <li><a href="https://wa.me/5562982809010" target="_blank" rel="noopener">+55 (62) 98280-9010</a></li>
              <li><a href="mailto:Contato@skilltchnologywork.com">Contato@skilltchnologywork.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 Skill Technology Work</p>
      </div>
    </footer>
  </template>
  
  <script>
  import SigaNos from './SigaNos.vue';
  export default {
    name: 'Footer',
    components: {
    SigaNos,    
  },
  };
  </script>
  
  <style scoped>
  /* Footer */
footer {
  background: var(--dark-bg);
  color: white;
  padding: 5rem 5% 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.footer-brand {
  max-width: 300px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.8);
  margin: 1.5rem 0;
}



.footer-links {
  display: flex;
  gap: 4rem;
}

.footer-column h3 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 1rem;
}

.footer-column a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: white;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}
  

  </style>