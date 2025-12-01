import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your repository name for GitHub Pages
  // If your repo is https://github.com/username/cantonese-opera-calendar
  // then base should be '/cantonese-opera-calendar/'
  base: process.env.NODE_ENV === 'production' ? '/cantonese-opera-calendar/' : '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
