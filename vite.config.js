import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  svgr()],
  server: {
    // Tambahkan properti 'allowedHosts' di sini
    allowedHosts: [
      '5f2e042cc7a2.ngrok-free.app' // tambahkan host ngrok di sini
    ],
    host: true, // biar bisa diakses dari luar
    port: 5173, // sesuaikan kalau pakai port lain
  },
})
