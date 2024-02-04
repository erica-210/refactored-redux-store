import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@redux': resolve(__dirname, 'src/redux') // Adjust the path to your Redux directory
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
