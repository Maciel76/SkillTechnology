import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Importe o módulo 'path' do Node.js

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Pasta de saída do build
    assetsDir: 'assets', // Pasta para assets (imagens, fonts, etc.)
    sourcemap: false, // Desative sourcemaps para produção
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configura o alias @ para src/
    },
  },
});