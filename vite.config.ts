import { fileURLToPath, URL } from 'node:url'
// import VueDevTools from 'vite-plugin-vue-devtools'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/product-feedback/',
  plugins: [
    vue()
    // VueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/_mixins.scss";'
      }
    }
  },
  server: {
    watch: {
      // ignore json files like data/data.json
      ignored: ['./data/**']
    }
  }
})
