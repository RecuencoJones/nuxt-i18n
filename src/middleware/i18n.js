const smoosh = (array) => array[0]
const getLanguagesFromHeader = (req) => req.headers['accept-language'].split(',')
const extractLang = (lang) => smoosh(lang.split('-'))

export default function({ isHMR, isClient, isServer, app, store, route, query, req, error, redirect }) {
  if (isHMR) return

  const defaultLocale = app.i18n.fallbackLocale
  const locale = query.lang || (isClient && extractLang(navigator.language)) || (isServer && extractLang(smoosh(getLanguagesFromHeader(req)))) || defaultLocale

  if (!process.env.locales.includes(locale)) {
    return error({ message: 'This page could not be found', statusCode: 404 })
  }

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale

  if (locale !== defaultLocale && query.lang !== locale) {
    return redirect(route.path, { ...query, lang: locale })
  }
}
