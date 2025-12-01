import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/8bf940bd-839e-42e5-ae03-220aca4dcd75/preview/',
  plugins: [react()],
  server: {
    port: 5159,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5159,
    },
  },
})
