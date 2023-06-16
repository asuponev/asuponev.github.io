// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Andrew Suponev',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
})
