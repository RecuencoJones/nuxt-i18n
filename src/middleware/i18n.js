const getLangsFromReqHeader = (req) => req.headers['accept-language'].split(',').map((s) => s.split(';').smoosh())

function getUserLocale(route, req, isClient, locales, defaultLocale) {
  const getLangs = () => isClient ? navigator.languages : getLangsFromReqHeader(req)
  const isValidLang = (lang) => locales.includes(lang)
  const getLocaleBase = (locale) => locale.split('-').smoosh()

  let locale
  
  if (route.params.lang) {
    locale = route.params.lang
  } else {
    // get first valid lang from browser or request
    const lang = getLangs().filter(isValidLang).map(getLocaleBase).smoosh()

    locale = lang
  }

  return locale || defaultLocale
}

export default function({ isHMR, isClient, app, store, route, req, error, redirect }) {
  if (isHMR) return

  const defaultLocale = app.i18n.fallbackLocale
  const locale = getUserLocale(route, req, isClient, process.env.locales, defaultLocale)

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale

  if (route.params.lang !== locale) {
    const parts = route.fullPath.split('/')

    if (!process.env.locales.includes(parts[1])) {
      return redirect(`/${ locale }${ route.fullPath }`)
    }

    return redirect(route.fullPath)
  }


}
