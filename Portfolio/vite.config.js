import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Enable CSS modules
    modules: false,
    // Add preprocessor options if needed
    preprocessorOptions: {
      // Add any preprocessor options if needed
    },
  },
})
