import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
        target: 'https://chessai-production-7a16.up.railway.app/',
        changeOrigin: true,
      },
      '/login': {
        target: 'https://chessai-production-7a16.up.railway.app/',
        changeOrigin: true,
      }
    }
  }
})