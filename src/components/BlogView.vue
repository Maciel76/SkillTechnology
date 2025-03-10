<template>
  <Header />
  <div class="blog-page">
    
    <header class="blog-header">
      <nav>
        <div class="search-bar">
          <input type="text" v-model="searchQuery" placeholder="Buscar artigos..." @input="handleSearch" />
          <button class="search-button">
            <img src="/src/assets/img/svg/search.svg" alt="Search" />
          </button>
        </div>
        <div class="nav-controls">
          <button @click="toggleTheme" class="theme-toggle">
            <img :src="isDarkMode ? '/src/assets/img/svg/sol.svg' : '/src/assets/img/svg/lua.svg'" :alt="isDarkMode ? 'Light mode' : 'Dark mode'" />
          </button>
        </div>
      </nav>
    </header>

    <main class="blog-main">
      <!-- Featured Post Section. -->
      <section v-if="featuredPosts.length" class="featured-post">
        <router-link :to="`/blog/${featuredPosts[0].id}`" class="featured-post-link">
          <img :src="featuredPosts[0].image" :alt="featuredPosts[0].title" class="featured-image" />
          <div class="featured-content">
            <span class="category">{{ featuredPosts[0].category }}</span>
            <h1>{{ featuredPosts[0].title }}</h1>
            <p>{{ featuredPosts[0].summary }}</p>
            <div class="post-meta">
              <span>{{ formatDate(featuredPosts[0].date) }}</span>
              <span>{{ featuredPosts[0].author }}</span>
            </div>
          </div>
        </router-link>
      </section>

      <div class="blog-content">
        <!-- Posts Grid -->
        <section class="post-grid">
          <article v-for="post in displayedPosts" :key="post.id" class="post-card">
            <router-link :to="`/blog/${post.id}`">
              <img :src="post.image" :alt="post.title" class="post-image" />
              <div class="post-info">
                <span class="category">{{ post.category }}</span>
                <h2>{{ post.title }}</h2>
                <p>{{ post.summary }}</p>
                <div class="post-meta">
                  <span>{{ formatDate(post.date) }}</span>
                  <span>{{ post.author }}</span>
                </div>
              </div>
            </router-link>
          </article>
        </section>

        <!-- Sidebar -->
        <aside class="blog-sidebar">
          <div class="sidebar-section categories">
            <h3>Categorias</h3>
            <ul>
              <li v-for="category in categories" :key="category">
                <button @click="filterByCategory(category)" :class="{ active: currentCategory === category }">
                  {{ category }}
                </button>
              </li>
            </ul>
          </div>

          <div class="sidebar-section popular-posts">
            <h3>Posts Populares</h3>
            <ul>
              <li v-for="post in popularPosts" :key="post.id">
                <router-link :to="`/blog/${post.id}`" class="popular-post-link">
                  <img :src="post.image" :alt="post.title" class="popular-post-image" />
                  <div class="popular-post-info">
                    <h4>{{ post.title }}</h4>
                    <span>{{ formatDate(post.date) }}</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="sidebar-section tags">
            <h3>Tags</h3>
            <div class="tag-cloud">
              <button
                v-for="tag in tags"
                :key="tag"
                @click="filterByTag(tag)"
                class="tag"
                :class="{ active: currentTag === tag }"
              >
                {{ tag }}
              </button>
            </div>
          </div>
        </aside>
      </div>

      <!-- Pagination -->
      <div class="pagination" v-if="totalPages > 1">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
          class="page-button"
        >
          Anterior
        </button>
        <span>{{ currentPage }} de {{ totalPages }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
          class="page-button"
        >
          Próxima
        </button>
      </div>
    </main>

    
  </div>
  <Footer />
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import Header from './atomos/Header.vue';
import Footer from './atomos/Footer.vue';
import { useBlog } from '../composables/useBlog';

export default {
  name: 'BlogView',
  components: {
    Header,
    Footer,
  },
  setup() {
    const {
      posts,
      featuredPosts,
      categories,
      tags,
      searchPosts,
    } = useBlog();

    const searchQuery = ref('');
    const currentPage = ref(1);
    const postsPerPage = 6;
    const currentCategory = ref(null);
    const currentTag = ref(null);
    const isDarkMode = ref(false);

    // Filter and pagination logic
    const filteredPosts = computed(() => {
      let result = posts.value;
      
      if (searchQuery.value) {
        result = searchPosts(searchQuery.value);
      }
      
      if (currentCategory.value) {
        result = result.filter(post => post.category === currentCategory.value);
      }
      
      if (currentTag.value) {
        result = result.filter(post => post.tags.includes(currentTag.value));
      }
      
      return result;
    });

    const totalPages = computed(() => 
      Math.ceil(filteredPosts.value.length / postsPerPage)
    );

    const displayedPosts = computed(() => {
      const start = (currentPage.value - 1) * postsPerPage;
      const end = start + postsPerPage;
      return filteredPosts.value.slice(start, end);
    });

    const popularPosts = computed(() => 
      [...posts.value]
        .sort((a, b) => b.views - a.views)
        .slice(0, 5)
    );

    // Methods
    const handleSearch = () => {
      currentPage.value = 1;
    };

    const filterByCategory = (category) => {
      currentCategory.value = currentCategory.value === category ? null : category;
      currentPage.value = 1;
    };

    const filterByTag = (tag) => {
      currentTag.value = currentTag.value === tag ? null : tag;
      currentPage.value = 1;
    };

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.setAttribute(
        'data-theme',
        isDarkMode.value ? 'dark' : 'light'
      );
    };

    // Initialize theme
    onMounted(() => {
      const savedTheme = localStorage.getItem('blog-theme');
      if (savedTheme === 'dark') {
        isDarkMode.value = true;
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    });

    return {
      searchQuery,
      currentPage,
      totalPages,
      currentCategory,
      currentTag,
      isDarkMode,
      featuredPosts,
      displayedPosts,
      categories,
      tags,
      popularPosts,
      handleSearch,
      filterByCategory,
      filterByTag,
      formatDate,
      toggleTheme
    };
  }
};
</script>

<style scoped>
/* Cores e temas */
:root {
  --primary-color: #3498db; /* Azul */
  --secondary-color: #2ecc71; /* Verde */
  --background-light: #f9f9f9; /* Fundo claro */
  --background-dark: #2c3e50; /* Fundo escuro */
  --text-light: #333; /* Texto claro */
  --text-dark: #ecf0f1; /* Texto escuro */
  --border-color: #ddd; /* Cor da borda */
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra padrão */
}

[data-theme="dark"] {
  --background-light: #2c3e50;
  --background-dark: #34495e;
  --text-light: #ecf0f1;
  --text-dark: #bdc3c7;
  --border-color: #444;
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: var(--background-light);
  color: var(--text-light);
  line-height: 1.6;
}

/* Container principal */
.blog-page {
  
  margin: 0 auto;
  padding: 20px;
}

/* Cabeçalho */
.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  width: 300px;
  background-color: transparent;
  color: var(--text-light);
  font-size: 1rem;
}

.search-button {
  background: var(--primary-color);
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-button img {
  width: 20px;
  height: 20px;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle img {
  width: 24px;
  height: 24px;
}

/* Post em Destaque */
.featured-post {
  margin-bottom: 40px;
  background: var(--background-dark);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.featured-post-link {
  display: flex;
  text-decoration: none;
  color: inherit;
}

.featured-image {
  width: 50%;
  height: 300px;
  object-fit: cover;
}

.featured-content {
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-content .category {
  color: var(--secondary-color);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.featured-content h1 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: var(--text-light);
}

.featured-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.post-meta {
  font-size: 0.9rem;
  color: #777;
}
/* Blog Content Layout */
.blog-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  padding: 4rem 5%;
}

/* Latest Posts */
.latest-posts h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.post-card {
  background: var(--blog-light-gray);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: translateY(-10px);
}

.post-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-card-content {
  padding: 1.5rem;
}

.post-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.post-card p {
  color: var(--blog-gray);
  margin-bottom: 1.5rem;
}

/* Blog Sidebar */
.blog-sidebar {
  position: sticky;
  top: 2rem;
}

.sidebar-section {
  background: var(--blog-light-gray);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.sidebar-section h3 {
  margin-bottom: 1rem;
}

.categories ul {
  list-style: none
  
}

.categories a {
  display: block;
  padding: 20px;
  color: var(--blog-text);
  text-decoration: none;
  transition: color 0.3s;
}

.categories a:hover,
.categories a.active {
  color: var(--blog-primary);
}

.popular-post {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  text-decoration: none;
  color: var(--blog-text);
}

.popular-post img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.popular-post h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.popular-post span {
  color: var(--blog-gray);
  font-size: 0.9rem;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--blog-secondary);
  color: var(--blog-text);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.tag:hover {
  background: var(--blog-primary);
  color: white;
}
.popular-post-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  list-style: none;
  transition: transform 0.3s ease;
}
.popular-post-link:hover {
  transform: translateY(-5px); 
}


.popular-post-image {
  width: 50px; /* Tamanho da miniatura */
  height: 50px;
  border-radius: 8px; /* Bordas arredondadas */
  object-fit: cover; /* Garante que a imagem cubra o espaço */
}


.popular-post li{
  list-style: none;
}

.popular-post-info {
  flex: 1;
  list-style: none;
}

.popular-post-info h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--blog-text);
  list-style: none;
}
.popular-post-info h4:hover {
  color: var(--primary-color);
}

.popular-post-info span {
  font-size: 0.9rem;
  color: var(--blog-gray);
  
}

/* Paginação */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

.page-button {
  background: var(--blog-primary);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
}

.page-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
/* Estilo dos itens da lista */
li {
  margin-bottom: 10px; /* Espaçamento entre os itens */
}

/* Estilo dos botões */
button {
  background-color: var(--blog-secondary); /* Cor de fundo */
  border: 1px solid var(--blog-secondary); /* Borda */
  border-radius: 20px; /* Bordas arredondadas */
  padding: 0.5rem 1rem; /* Espaçamento interno */
  color: var(--blog-text); /* Cor do texto */
  font-size: 0.9rem; /* Tamanho da fonte */
  cursor: pointer; /* Cursor de ponteiro */
  transition: background-color 0.3s ease, color 0.3s ease; /* Transição suave */
  transition: transform 0.3s ease;
}

/* Estilo do botão ativo */
button.active {
  background-color: var(--blog-primary); /* Cor de fundo quando ativo */
  color: white; /* Cor do texto quando ativo */
  border-color: var(--blog-primary); /* Cor da borda quando ativo */
}

/* Efeito hover nos botões */
button:hover {
  background: var(--primary-color); /* Cor de fundo ao passar o mouse */
  color: rgb(253, 253, 253); /* Cor do texto ao passar o mouse */
  transform: translateY(-5px); 
}

/* Responsividade */
@media (max-width: 768px) {
  .blog-content {
    flex-direction: column;
  }

  .blog-sidebar {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }

  .featured-post-link {
    flex-direction: column;
  }

  .featured-image, .featured-content {
    width: 100%;
  }

  .featured-image {
    height: 200px;
  }
}
/* Responsividade */
@media (max-width: 1024px) {
  .featured-post {
    flex-direction: column;
  }

  .blog-content {
    grid-template-columns: 1fr;
  }

  .post-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .blog-header nav {
    flex-direction: column;
  }

  .search-bar {
    max-width: 100%;
  }

  .featured-post h1 {
    font-size: 2.5rem;
  }

  .share-buttons {
    flex-direction: column;
  }
  
}
</style>

