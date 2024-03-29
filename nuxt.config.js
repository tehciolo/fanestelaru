export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fanestelaru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fane Stelaru homepage' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** PWA manifest data
  */
  manifest: {
    name: 'fanestelaru.com',
    short_name: 'fanestelaru.com',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#4DBA87',
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'white' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/particles', ssr: false },
    { src: '~/plugins/netlify-identity-widget', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    'nuxt-buefy',
  ],
  /*
  ** Sitemap module configuration
  ** See https://www.npmjs.com/package/@nuxtjs/sitemap
  */
  sitemap: {
    hostname: 'https://fanestelaru.com',
    gzip: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /* @nuxtjs/toast */
  toast: {
    position: 'bottom-center',
    duration: 2000,
    theme: 'bubble',
    register: [],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  target: 'static',
};
