import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // Correct import

export default defineConfig({
  plugins: [react(), tailwindcss()],  // Add tailwindcss() here
})
