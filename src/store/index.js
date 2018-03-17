export const state = () => ({
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (process.env.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
