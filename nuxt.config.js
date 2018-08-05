module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fanestelaru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  manifest: {
    "name": "fanestelaru.com",
    "short_name": "fanestelaru.com",
    "display": "standalone",
    "background_color": "#000000",
    "theme_color": "#4DBA87",
  },
  /*
  ** Use these modules
  */
  modules: [
      '@nuxtjs/pwa',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#4DBA87' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

