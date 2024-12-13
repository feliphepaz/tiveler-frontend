// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/main.scss'],
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans': {
            wght: [800, 700, 500, 400],
          },
        },
      },
    ],
  ],
})
