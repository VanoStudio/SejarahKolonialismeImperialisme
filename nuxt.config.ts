// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@tresjs/nuxt'
  ],
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
