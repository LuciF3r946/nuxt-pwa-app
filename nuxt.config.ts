export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],

  pwa: {
    manifestFilename: 'manifest.webmanifest',
    registerType: 'autoUpdate',

    manifest: {
      name: 'My Nuxt PWA App',
      short_name: 'NuxtPWA',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icon-1.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-5.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },

    workbox: {
      navigateFallback: '/'
    }
  }
})