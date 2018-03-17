<template>
  <div>
    <header>
      <nuxt-link :to="$i18n.path('index')">{{ $t('nav.home') }}</nuxt-link>
      <nuxt-link :to="$i18n.path('about')">{{ $t('nav.about') }}</nuxt-link>
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
