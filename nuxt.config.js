const locales = ['en', 'es']

module.exports = {
  srcDir: './src',
  build: {
    vendor: ['vue-i18n']
  },
  head: {
    title: 'Nuxt i18n',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js'
  ],
  env: {
    locales
  },
  generate: {
    routes: ['/en', '/en/about', '/es', '/es/about']
  }
}
