// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  nitro: {
    compressPublicAssets: true,
    preset: 'cloudflare_pages',
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  modules: ['@tresjs/nuxt', 'nuxt-swiper'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  vue:{
    compilerOptions: {
      isCustomElement: (tag) => ['router-link', 'nuxt-link'].includes(tag)
  }
  }
})