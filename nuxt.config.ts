// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/i18n', {
      defaultLocale: 'en-gb',
      langDir: 'lang',
      strategy: 'prefix',
      locales: [
        {
          code: 'nl-nl',
          file: 'nl.json',
        },
        {
          code: 'en-gb',
          file: 'en.json',
        },
      ]
    }]
  ]
})
