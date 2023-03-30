// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['composables', 'composables/**/index.ts'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})
