import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/WeatherVue/',
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'WeatherVue',
        short_name: 'WeatherVue',
        description: 'WeatherApp made by vue',
        icons: [
          {
            src: 'img/icons/apple-touch-icon-120x120.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icons/apple-touch-icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


