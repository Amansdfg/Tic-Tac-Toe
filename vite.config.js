import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Tic-Tac-Toe/',  
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
