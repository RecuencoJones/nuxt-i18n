const locales = ['en', 'es']

module.exports = {
  srcDir: './src',
  build: {
    vendor: ['vue-i18n', 'prevent-smoosh']
  },
  head: {
    title: 'Nuxt i18n',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ],
    script: [
      { src: 'https://unpkg.com/prevent-smoosh@3.0.1/index.js', defer: true }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/smoosh.js',
    '~/plugins/i18n.js'
  ],
  env: {
    locales
  },
  generate: {
    routes: ['/en', '/en/about', '/es', '/es/about']
  }
}
