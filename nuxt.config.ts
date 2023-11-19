// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'light'
  },
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  runtimeConfig:{
    public:{
      xsrfToken: process.env.XSRF_TOKEN,
      apiBaseUrl: process.env.API_BASE
    }
  }
})
