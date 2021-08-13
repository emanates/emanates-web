import config from "./.emanates.js"

const settings = {
  target: 'static',

  head: {
    title: config.seo.site_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: config.seo.site_description },
      { name: "robots", content: "index,follow" },
      { hid: 'keywords', name: "keywords", content: config.seo.site_keywords },
      // Itemprop
      {
        hid: 'itemprop-name',
        itemprop: "name",
        content: config.seo.site_name
      },
      {
        hid: 'itemprop-description',
        itemprop: "description",
        content: config.seo.site_description
      },
      // Twitter stuff
      { hid: 'twitter-card', name: "twitter:card", content: "summary" },
      {
        hid: 'twitter-title',
        name: "twitter:title",
        content: config.seo.site_name
      },
      {
        hid: 'twitter-desc',
        name: "twitter:description",
        content: config.seo.site_description
      },
      { hid: 'twitter-url', name: "twitter:url", content: config.seo.base_url },
      { hid: 'twitter-creator', name: "twitter:creator", content: config.seo.twitter_username },
      {
        hid: 'twitter-img',
        name: "twitter:image",
        content: config.seo.logo
      },
      {
        hid: 'twitter-site',
        name: "twitter:site",
        content: config.seo.twitter_username
      },
      // Facebook
      { hid: 'og:type', property: "og:type", content: "website" },
      {
        hid: 'og:title',
        property: "og:title",
        content: config.seo.site_name
      },
      { hid: 'fb-url', property: "og:url", content: config.seo.base_url },
      {
        hid: 'og:description',
        property: "og:description",
        content: config.seo.site_description
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: config.seo.site_name
      },
      {
        hid: 'fb-img',
        property: "og:image",
        content: config.seo.logo
      },
      { hid: 'fb-img-type', property: "og:image:type", content: "image/png" },
      { hid: 'fb-img-width', property: "og:image:width", content: "512" },
      { hid: 'fb-img-height', property: "og:image:height", content: "512" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: config.favicon_url }
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
    '~/plugins/meta.js'
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

// Check if analytics can be added
if (config.googleAnalytics) {
  // Add the module as a build module
  settings.buildModules.push("@nuxtjs/google-analytics")

  // Add the ID
  settings.googleAnalytics = config.googleAnalytics
}

export default settings;
