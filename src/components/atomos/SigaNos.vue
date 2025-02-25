<!-- src/components/Footer.vue -->
<template>      
   <p><br>Siga Nosso Trabalho nas redes sócias</p> <br>
 <div class="social-links">
    <a href="#"><img src="/src/assets/img/svg/facbook.svg" alt="Facebook"></a>
    <a href="#"><img src="/src/assets/img/svg/instagram.svg" alt="Instagram"></a>
    <a href="#"><img src="/src/assets/img/svg/youtube.svg" alt="YouTube"></a>
    <a href="#"><img src="/src/assets/img/svg/linkdin.svg" alt="LinkedIn"></a>
    <a href="#"><img src="/src/assets/img/svg/whatsapp.svg" alt="Whatsapp"></a>
 </div>        
  </template>
  
  <script>
  export default {
    name: 'SegaNos',
  };
  </script>
  
  <style scoped>
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  </style>