export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],

  ssr: true, // keep SSR

  pwa: {
    manifestFilename: 'manifest.webmanifest',
    registerType: 'autoUpdate',
    injectRegister: 'auto',   // IMPORTANT
    includeAssets: ['i1.png', 'i2.png'],

    manifest: {
      name: 'My Nuxt PWA App',
      short_name: 'NuxtPWA',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
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
      navigateFallback: '/'
    },

    client: {
      installPrompt: true
    }
  }
})