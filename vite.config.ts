import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // project site: https://tun12348573.github.io/portfolio/ — đổi theo tên repo
})
