<template>
    <div>
      <Header />
      <NovaAvaliacaoForm @nova-avaliacao="adicionarAvaliacao" />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import NovaAvaliacaoForm from './NovaAvaliacaoForm.vue';
  
  export default {
    name: 'NovaAvaliacaoPage',
    components: {
      Header,
      Footer,
      NovaAvaliacaoForm,
    },
    methods: {
      adicionarAvaliacao(novaAvaliacao) {
        // Emite um evento global para adicionar a nova avaliação
        this.$emit('nova-avaliacao', novaAvaliacao);
        // Redireciona de volta para a página de feedback
        this.$router.push('/feedback');
      },
    },
  };
  </script>