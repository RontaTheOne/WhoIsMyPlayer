import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  root: 'src/client',

  resolve: {
    alias: {
      '@client': path.resolve(__dirname, 'src/client'),
      '@components': path.resolve(__dirname, 'src/client/components'),
      '@pages': path.resolve(__dirname, 'src/client/pages'),
      '@services': path.resolve(__dirname, 'src/client/services'),
      '@assets': path.resolve(__dirname, 'src/client/assets'),
    },
  },

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: path.resolve(__dirname, 'dist/client'),
    emptyOutDir: true,
  },
})