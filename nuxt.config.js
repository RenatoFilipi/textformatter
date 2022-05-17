export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Text Formatter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'This is a Text Formatter website. where you can format your text to uppercase all, lowercase all, capitalize sentence and capitalize words',
      },
      {
        name: 'keywords',
        content: 'Text, Formatter, Uppercase, Lowercase, capitalize',
      },
      { name: 'author', content: 'Renato Filipi' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Google Analytics config
  googleAnalytics: {
    id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    layer: 'dataLayer',
    pageTracking: true,
    debug: {
      sendHitTask: true,
    },
  },
  publicRuntimeConfig: {
    id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    layer: 'dataLayer',
    pageTracking: true,
    debug: {
      sendHitTask: true,
    },
  },

  // Google font setup
  googleFonts: {
    families: {
      Quicksand: [300, 400, 500, 600, 700],
    },
    preconnect: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
