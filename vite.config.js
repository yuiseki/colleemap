import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  define: {
    global: 'globalThis'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  plugins: [
    basicSsl(),
    svelte({
      experimental: {
        useVitePreprocess: true
      }
    })
  ]
})
