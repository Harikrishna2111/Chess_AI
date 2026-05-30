import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_URL = process.env.VITE_API_URL || 'http://localhost:5000/'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'nidificational-charlie-preeducational.ngrok-free.dev'
    ],
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
      },
      '/login': {
        target: API_URL,
        changeOrigin: true,
      }
    }
  }
})