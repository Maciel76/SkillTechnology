<template>
    <main>
      <!-- Conteúdo da página -->
      <section class="testimonials-section">
        <h2>O Que Nossos Clientes Dizem</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="client-info">
                    <img src="/src/assets/img/image/user5.png" alt="Client" class="client-avatar">
                    <div>
                        <h3>João Silva</h3>
                        <p>CEO, Tech Solutions</p>
                    </div>
                </div>
                <p class="testimonial-text">"A implementação da IA revolucionou nossos processos internos, reduzindo custos em 40% e aumentando a produtividade em 60%."</p>
                <router-link to="#" class="learn-more">Ver Projeto -></router-link>
            </div>
            <div class="testimonial-card">
                <div class="client-info">
                    <img src="/src/assets/img/image/user6.png" alt="Client" class="client-avatar">
                    <div>
                        <h3>Guilherme Santos</h3>
                        <p>CEO, Tech Solutions</p>
                    </div>
                </div>
                <p class="testimonial-text">"A implementação da IA revolucionou nossos processos internos, reduzindo custos em 40% e aumentando a produtividade em 60%."</p>
                <router-link to="#" class="learn-more">Ver Projeto -></router-link>
            </div>
            <div class="testimonial-card">
                <div class="client-info">
                    <img src="/src/assets/img/image/user7.png" alt="Client" class="client-avatar">
                    <div>
                        <h3>Maria Santos</h3>
                        <p>Marketing Director, E-commerce</p>
                    </div>
                </div>
                <p class="testimonial-text">"O sistema de marketing automatizado nos ajudou a triplicar nossas conversões em apenas 3 meses."</p>
                <router-link to="#" class="learn-more">Ver Projeto -></router-link>
            </div>
        </div>
    </section>
    </main>  
</template>

<script>  
export default {
  name: 'TestimonialsPage',
};
</script>

<style scoped>
/* Estilos globais ou específicos da página */
.learn-more {
    color: rgb(36, 104, 230);
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease; /* Transição suave */
}

.learn-more:hover {
    color: rgb(190, 105, 25); /* Muda a cor ao passar o mouse */
    transform: translateX(10px); /* Move o texto 5px para a direita */
}

</style>