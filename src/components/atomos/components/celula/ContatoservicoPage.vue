<template>
    <main>
      <!-- Conteúdo da página -->
      <section class="contact-section">
        <div class="contact-content">
            <h2>Transforme seu Negócio com  IA</h2>
            <p>Entre em contato e descubra como podemos impulsionar seus resultados</p>
            <form id="contactForm" class="contact-form">
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Seu nome" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Seu e-mail" required>
                    </div>
                </div>
                <div class="form-group">
                    <select id="service" name="service" required>
                        <option value="">Selecione um serviço</option>
                        <option value="websites">Websites Inteligentes</option>
                        <option value="apps">Apps com IA</option>
                        <option value="content">Geração de Conteúdo</option>
                        <option value="chatbot">Chatbots</option>
                        <option value="analytics">Análise de Dados</option>
                        <option value="marketing">Marketing Automatizado</option>
                    </select>
                </div>
                <div class="form-group">
                    <textarea id="message" name="message" placeholder="Sua mensagem" required></textarea>
                </div>
                <button type="submit" class="cta-button1">Solicitar Demonstração</button>
            </form>
        </div>
    </section>
    </main>  
</template>

<script>  
export default {
  name: 'ContactServicePage',
};
</script>

<style>
/* Estilos globais ou específicos da página */
</style>