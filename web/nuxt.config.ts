import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // '@nuxtjs/robots',
    // '@nuxtjs/sanity',
    // '@nuxtjs/shopify',
    // '@nuxtjs/sitemap',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxthub/core',
  ],

  fonts: {
    defaults: {
      weights: [400, 500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
  },

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  css: ['@/assets/styles/app.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'embla-carousel-vue',
      ],
    },
  },

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
})
