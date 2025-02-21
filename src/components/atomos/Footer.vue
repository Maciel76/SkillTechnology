<!-- src/components/Footer.vue -->
<template>
    <footer>
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <img src="/src/assets/img/svg/logo.svg" alt="Logo" class="logo-icon">
            <span>Skill Technology Work</span>
          </div>
          <p>Desenvolvemos Seu Site Com Criatividade e Inovação <br> <br>Siga Nosso Trabalho</p>
          <div class="social-links">
            <a href="#"><img src="/src/assets/img/svg/facbook.svg" alt="Facebook"></a>
            <a href="#"><img src="/src/assets/img/svg/instagram.svg" alt="Instagram"></a>
            <a href="#"><img src="/src/assets/img/svg/youtube.svg" alt="YouTube"></a>
            <a href="#"><img src="/src/assets/img/svg/linkdin.svg" alt="LinkedIn"></a>
            <a href="#"><img src="/src/assets/img/svg/whatsapp.svg" alt="Whatsapp"></a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h3>Nosso site</h3>
            <ul>
              <li><router-link to="#">Nossa missão</router-link></li>
              <li><router-link to="#">Sobre</router-link></li>
              <li><router-link to="#">Eventos</router-link></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Informação útil</h3>
            <ul>
              <li><router-link to="#">Política de Privacidade</router-link></li>
              <li><router-link to="#">Termos de Uso</router-link></li>
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
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>

  </style>