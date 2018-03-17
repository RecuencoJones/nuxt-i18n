import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const messages = process.env.locales.reduce((accum, locale) => ({ 
    ...accum, 
    [locale]: require(`~/locales/${ locale }.json`) 
  }), {})

  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages
  })

  app.i18n.path = (name, query = {}) => {
    if (!query.lang) {
      query.lang = app.i18n.locale
    }

    return {
      name,
      query
    }
  }
}
