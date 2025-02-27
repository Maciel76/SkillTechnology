<template>
    <div class="article-editor">
      <h2>{{ isEditing ? 'Editar Artigo' : 'Criar Novo Artigo' }}</h2>
      <form @submit.prevent="saveArticle">
        <div class="form-group">
          <label for="title">Título</label>
          <input type="text" id="title" v-model="article.title" required />
        </div>
        <div class="form-group">
          <label for="author">Autor</label>
          <input type="text" id="author" v-model="article.author" required />
        </div>
        <div class="form-group">
          <label for="date">Data</label>
          <input type="date" id="date" v-model="article.date" required />
        </div>
        <div class="form-group">
          <label for="category">Categoria</label>
          <select id="category" v-model="article.category" required>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="tags">Tags</label>
          <input type="text" id="tags" v-model="article.tags" placeholder="Separe as tags por vírgula" required />
        </div>
        <div class="form-group">
          <label for="image">URL da Imagem</label>
          <input type="url" id="image" v-model="article.image" required />
        </div>
        <div class="form-group">
          <label for="summary">Resumo</label>
          <textarea id="summary" v-model="article.summary" required></textarea>
        </div>
        <div class="form-group">
          <label for="content">Conteúdo</label>
          <textarea id="content" v-model="article.content" required></textarea>
        </div>
        <button type="submit">{{ isEditing ? 'Salvar Alterações' : 'Criar Artigo' }}</button>
        <button type="button" @click="cancelEdit" v-if="isEditing">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useBlog } from '../composables/useBlog';
  
  export default {
    name: 'ArticleEditor',
    props: {
      postId: {
        type: Number,
        default: null
      }
    },
    setup(props) {
      const { posts, categories, saveData } = useBlog();
      const article = ref({
        id: null,
        title: '',
        author: '',
        date: '',
        category: '',
        tags: '',
        image: '',
        summary: '',
        content: '',
        views: 0,
        comments: [],
        isDraft: false
      });
  
      const isEditing = ref(false);
  
      // Carrega o artigo para edição se postId for fornecido
      onMounted(() => {
        if (props.postId) {
          const postToEdit = posts.value.find(p => p.id === props.postId);
          if (postToEdit) {
            article.value = { ...postToEdit, tags: postToEdit.tags.join(', ') };
            isEditing.value = true;
          }
        }
      });
  
      // Salva o artigo
      const saveArticle = () => {
        if (isEditing.value) {
          // Atualiza o artigo existente
          const index = posts.value.findIndex(p => p.id === article.value.id);
          if (index !== -1) {
            posts.value[index] = {
              ...article.value,
              tags: article.value.tags.split(',').map(tag => tag.trim())
            };
          }
        } else {
          // Cria um novo artigo
          const newArticle = {
            ...article.value,
            id: Date.now(), // Gera um ID único
            tags: article.value.tags.split(',').map(tag => tag.trim())
          };
          posts.value.push(newArticle);
        }
  
        saveData();
        window.alert('Artigo salvo com sucesso!');
        resetForm();
      };
  
      // Cancela a edição
      const cancelEdit = () => {
        resetForm();
      };
  
      // Reseta o formulário
      const resetForm = () => {
        article.value = {
          id: null,
          title: '',
          author: '',
          date: '',
          category: '',
          tags: '',
          image: '',
          summary: '',
          content: '',
          views: 0,
          comments: [],
          isDraft: false
        };
        isEditing.value = false;
      };
  
      return {
        article,
        isEditing,
        categories,
        saveArticle,
        cancelEdit
      };
    }
  };
  </script>
  
  <style scoped>
  .article-editor {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  button {
    padding: 10px 20px;
    background: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  button:hover {
    background: #2980b9;
  }
  </style>