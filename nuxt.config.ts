// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Andrew Suponev',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
})
