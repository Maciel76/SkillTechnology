<!-- src/components/HeroSection.vue. -->
<template>
  <section class="hero">
    <div class="hero-content">
      <div class="social-proof">
        <img src="/src/assets/img/image/user1.png" alt="User 1" class="user-avatar">
        <img src="/src/assets/img/image/user2.png" alt="User 2" class="user-avatar">
        <img src="/src/assets/img/image/user3.png" alt="User 3" class="user-avatar">
        <img src="/src/assets/img/image/user4.png" alt="User 4" class="user-avatar">
        <span> Nossos clientes satisfeitos <router-link to="/feedback" id="seemore">Ver mais...</router-link></span>
      </div>
      <h1>Soluções IA que Simplificam e <span class="highlight" id="typing1"> Aceleram Resultados</span></h1>
      <p>Utilizamos Inteligência Artificial para Automatizar, Personalizar e Facilitar os Processos Da sua Empresa </p>
    </div>
    <div class="hero-image" @mouseenter="pauseSlider" @mouseleave="resumeSlider">
      <div class="slider-container" role="region" aria-label="Image Slider">
        <div class="slider" :style="sliderStyle">
          <img v-for="(image, index) in images" 
              :key="index" 
              :src="image.src" 
              :alt="image.alt" 
              class="team-image"
              :class="{ active: currentIndex === index }"
              @keydown.left="previousSlide"
              @keydown.right="nextSlide"
              tabindex="0">
        </div>
        <button class="nav-button prev" @click="previousSlide" aria-label="Previous slide">&lt;</button>
        <button class="nav-button next" @click="nextSlide" aria-label="Next slide">&gt;</button>
        <div class="dots">
          <button v-for="(_, index) in images" 
                  :key="index"
                  class="dot"
                  :class="{ active: currentIndex === index }"
                  @click="goToSlide(index)"
                  :aria-label="`Go to slide ${index + 1}`"
                  :aria-current="currentIndex === index"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'HeroSection',
data() {
  return {
    images: [
      { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3', alt: 'Team' },
      { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3', alt: 'Collaboration' },
      { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3', alt: 'Team Meeting' },
      { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3', alt: 'Innovation' }
    ],
    currentIndex: 0,
    autoplayInterval: null,
    transitionSpeed: 5000
  };
},
computed: {
  sliderStyle() {
    return {
      transform: `translateX(-${this.currentIndex * 100}%)`
    };
  }
},
methods: {
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  },
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  },
  goToSlide(index) {
    this.currentIndex = index;
  },
  startAutoplay() {
    this.autoplayInterval = setInterval(this.nextSlide, this.transitionSpeed);
  },
  pauseSlider() {
    clearInterval(this.autoplayInterval);
  },
  resumeSlider() {
    this.startAutoplay();
  }
},
mounted() {
  this.startAutoplay();
},
beforeUnmount() {
  clearInterval(this.autoplayInterval);
}
};
</script>

<style scoped>
.hero {
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem;
gap: 2rem;
}

.hero-content {
flex: 1;
}

.hero-image {
position: relative;
flex: 1;
overflow: hidden;
border-radius: 8px;
}

.slider-container {
position: relative;
width: 100%;
height: 400px;
overflow: hidden;
}

.slider {
display: flex;
width: 100%;
height: 100%;
transition: transform 0.5s ease-in-out;
}

.team-image {
width: 100%;
height: 100%;
object-fit: cover;
flex-shrink: 0;
}

.nav-button {
position: absolute;
top: 50%;
transform: translateY(-50%);
background: rgba(0, 0, 0, 0.5);
color: rgb(255, 255, 255);
border: none;
padding: 1rem;
cursor: pointer;
border-radius: 30%;
font-size: 1.2rem;
z-index: 2;
transition: background-color 0.3s;
}

.nav-button:hover {
background: rgba(25, 129, 189, 0.541);
}

.prev {
left: 1rem;
}

.next {
right: 1rem;
}

.dots {
position: absolute;
bottom: 1rem;
left: 50%;
transform: translateX(-50%);
display: flex;
gap: 0.5rem;
z-index: 2;
}

.dot {
width: 10px;
height: 10px;
border-radius: 50%;
background: rgba(255, 255, 255, 0.5);
border: none;
cursor: pointer;
transition: background-color 0.3s;
}

.dot.active {
background: white;
}

@media (max-width: 768px) {
.hero {
  flex-direction: column;
}

.hero-image {
  width: 100%;
}

.slider-container {
  height: 300px;
}

.nav-button {
  padding: 0.2rem;
  font-size: 1rem;
}
}

.hero-image {
flex: 1;
position: relative;
display: flex;
justify-content: center;
}

.team-image {
max-width: 100%;
height: auto;
border-radius: 15px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.secondary-image {
position: absolute;
width: 60%;
top: 50%;
right: -20%;
transform: translateY(-50%);
z-index: -1;
opacity: 0.8;
}

.social-proof {
display: flex;
align-items: center;
gap: 0.5rem;
margin-bottom: 2rem;
}

.user-avatar {
width: 40px;
height: 40px;
border-radius: 50%;
border: 2px solid white;
}

@media (max-width: 768px) {
.hero {
  flex-direction: column;
  text-align: center;
}

.hero-image {
  width: 100%;
}

.secondary-image {
  display: none;
}

.social-proof {
  justify-content: center;
}
}
</style>