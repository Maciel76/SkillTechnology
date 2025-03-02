import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve o __dirname no ambiente ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  base: '/src/', // Caminho base do projeto
  build: {
    outDir: 'dist',          // Pasta de saída do build
    assetsDir: 'assets',     // Pasta para assets
    sourcemap: true,        // Desativa sourcemaps para produção
  },
});
