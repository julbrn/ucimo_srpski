import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  base: '/tailwind_project/',
  plugins: [
    tailwindcss(),
    react(),
    ghPages()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
