import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ncc-1701-v3.github.io/gh-react-vite/',
  plugins: [react()]
})
