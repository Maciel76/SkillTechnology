<template>
    <div>
      <!-- Formulário de nova avaliação -->
      <div class="nova-avaliacao">
        <h3 class="form-title">Deixe sua avaliação</h3>
        <form id="form-avaliacao" class="avaliacao-form" @submit.prevent="submitAvaliacao">
          <div class="form-group">
            <label for="nome">Seu Nome:</label>
            <input type="text" id="nome" v-model="nome" required />
          </div>
          <div class="form-group">
            <label for="empresa">Sua Empresa:</label>
            <input type="text" id="empresa" v-model="empresa" />
          </div>
          <div class="form-group">
            <label for="avaliacao">Sua Avaliação:</label>
            <textarea id="avaliacao" v-model="avaliacao" rows="5" required></textarea>
          </div>
          <div class="form-group">
            <label for="foto">Enviar Foto (opcional):</label>
            <input type="file" id="foto" @change="onFileChange" accept="image/*" />
          </div>
          <button type="submit" class="btn-enviar" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Enviar Avaliação' }}
          </button>
        </form>
      </div>
  
      <!-- Overlay de sucesso -->
      <div v-if="showOverlay" class="overlay" @click.self="fecharOverlay">
        <div class="overlay-content">
          <Icon icon="mdi:check-circle" class="success-icon" />
          <h3>Avaliação enviada com sucesso!</h3>
          <p>Obrigado por compartilhar sua experiência conosco.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { Icon } from '@iconify/vue'; // Importa o componente Icon do Iconify
  
  export default {
    name: 'NovaAvaliacaoForm',
    components: {
      Icon, // Registra o componente Icon
    },
    setup() {
      const nome = ref('');
      const empresa = ref('');
      const avaliacao = ref('');
      const foto = ref(null);
      const isSubmitting = ref(false);
      const showOverlay = ref(false); // Controla a visibilidade da overlay
      const router = useRouter();
  
      const onFileChange = (event) => {
        foto.value = event.target.files[0];
      };
  
      const submitAvaliacao = () => {
        isSubmitting.value = true;
  
        // Simula o envio da avaliação
        setTimeout(() => {
          // Limpa o formulário
          nome.value = '';
          empresa.value = '';
          avaliacao.value = '';
          foto.value = null;
          isSubmitting.value = false;
  
          // Mostra a overlay de sucesso
          showOverlay.value = true;
        }, 1000);
      };
  
      const fecharOverlay = () => {
        // Fecha a overlay e redireciona para a página inicial
        showOverlay.value = false;
        router.push('/');
      };
  
      return {
        nome,
        empresa,
        avaliacao,
        foto,
        isSubmitting,
        showOverlay,
        onFileChange,
        submitAvaliacao,
        fecharOverlay,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos do formulário */
  .nova-avaliacao {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .avaliacao-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-enviar {
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .btn-enviar:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  /* Estilos da overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .overlay-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 90%;
  }
  
  .success-icon {
    font-size: 3rem;
    color: #28a745;
    animation: bounce 1s infinite; /* Adiciona uma animação de bounce */
  }
  
  .overlay-content h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .overlay-content p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Animação de bounce */
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
  </style>