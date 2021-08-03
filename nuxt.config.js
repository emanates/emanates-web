import config from "./.emanates.js"

export default {
  target: 'static',

  head: {
    title: config.seo.site_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/scss/app.scss',
    '~/assets/css/fonts/inter.css',
    // '~/assets/css/fonts/merriweather.css',
    '~/assets/css/fonts/jetbrains-mono.css',
    '~/assets/css/themes/night-owl.css'
  ],

  plugins: [
    { src: '~/plugins/unicons', mode: 'client' },
    '~/plugins/micromodal.client.js',
    '~/plugins/posts.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  modules: [
    '@nuxtjs/pwa',
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
    babel: {
      babelrc: true
    }
  },

  // Change port
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
}
