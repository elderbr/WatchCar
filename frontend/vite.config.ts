import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  optimizeDeps: {
    include: ['chart.js', 'vue-chartjs'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['watchcar.onrender.com', 'localhost', 'watchcar.com.br', 'www.watchcar.com.br'],
  },
})
