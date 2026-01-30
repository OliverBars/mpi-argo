import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Прибираємо крапку, залишаємо тільки сліш
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
