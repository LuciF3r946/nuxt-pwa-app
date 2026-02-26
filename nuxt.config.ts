export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],

  ssr: true,

  app: {
    head: {
      link: [
        {
          rel: 'manifest',
          href: '/manifest.webmanifest'
        }
      ]
    }
  },

  pwa: {
    manifestFilename: 'manifest.webmanifest',
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    includeAssets: ['i1.png', 'i2.png'],

    manifest: {
      name: 'My Nuxt PWA App',
      short_name: 'NuxtPWA',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      lang: 'en',
      scope: '/',
      icons: [
        {
          src: '/i1.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/i2.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },

    workbox: {
      navigateFallback: '/',
      cleanupOutdatedCaches: true
    },

    client: {
      installPrompt: true
    }
  }
})