import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remove the base configuration since we're not using GitHub Pages
  // base: '/Wedding-Countdown-Web/',
})