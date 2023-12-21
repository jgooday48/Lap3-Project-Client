/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
   css: {
    modules: false,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/dist/css/bootstrap.min.css";`,
      },
    },
  }
})

