module.exports = {
  srcDir: './src',
  build: {
    vendor: ['vue-i18n']
  },
  head: {
    title: 'Nuxt i18n',
    meta: [
      //{ charset, utf-8 },
      //{ viewport, max-size=1,initial-scale=1 }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js'
  ],
  env: {
    locales: ['en', 'es']
  },
  generate: {
    routes: ['/', '/about']
  }
}
