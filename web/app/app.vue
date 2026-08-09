<script setup lang="ts">
useHead({
  titleTemplate: (title) => title
    ? `${title} · Headless`
    : 'Headless: A Nuxt Sanity + Shopify Template',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#181717' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://cdn.shopify.com' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div>Hello World!</div>
</template>
