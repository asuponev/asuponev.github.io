// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Andrew Suponev',
      viewport:
        'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0',
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
    preference: 'dark',
    classSuffix: '',
  },
  runtimeConfig: {
    tgBbotToken: process.env.TG_BOT_TOKEN,
    tgChatId: process.env.TG_CHAT_ID,
    public: {
      apiUrl: process.env.API_URL,
    },
  },
})
