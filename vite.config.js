import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimisation du bundle avec code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les dépendances vendor pour meilleur caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
          'icons': ['lucide-react']
        }
      }
    },
    // Taille des chunks
    chunkSizeWarningLimit: 500
  },
  // Optimisation du dev server
  server: {
    warmup: {
      clientFiles: ['./src/App.jsx', './src/pages/Home.jsx']
    }
  }
})
