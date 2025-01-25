import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsIncludes:['**/*.png','**/*.jpeg','**/*.jpg'],
  publicDir: 'public',
})
