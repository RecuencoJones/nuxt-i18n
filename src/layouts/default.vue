<template>
  <div>
    <header>
      <nuxt-link :to="$i18n.path('lang')">{{ $t('nav.home') }}</nuxt-link>
      <nuxt-link :to="$i18n.path('lang-about')">{{ $t('nav.about') }}</nuxt-link>
    </header>
    <section>
      <nuxt />
    </section>
    <footer>
      <nuxt-link v-if="$i18n.locale !== 'en'" :to="$i18n.path($route.name, { lang: 'en' })">Switch to english version</nuxt-link>
      <nuxt-link v-if="$i18n.locale !== 'es'" :to="$i18n.path($route.name, { lang: 'es' })">Ir a version en español</nuxt-link>
    </footer>
  </div>
</template>

<script>
  export default {
    head() {
      const route = this.$nuxt.$route
      const { name, params } = route

      console.log(process.env.locales)

      return {
        htmlAttrs: {
          lang: params.lang
        },
        link: process.env.locales.map((locale) => ({
          rel: 'alternate',
          hreflang: locale,
          href: route.matched.find((match) => match.name === name).path.replace(':lang', locale)
        }))
      }
    }
  }
</script>
