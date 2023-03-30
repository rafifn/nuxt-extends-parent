// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['composables', 'composables/**/index.ts', 'stores'],
  },
  modules: ['@pinia/nuxt'],
  alias: {
    "@pinia/nuxt": require.resolve("@pinia/nuxt/module.mjs"),
  },
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore']
    ],
  },
})
