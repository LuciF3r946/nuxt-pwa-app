export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],

  pwa: {
    manifestFilename: 'manifest.webmanifest',
    registerType: 'autoUpdate',
    manifest: {
      name: 'My Nuxt PWA App',
      short_name: 'NuxtPWA',
      theme_color: '#ffffff',
      display: 'standalone',
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
    }
  }
})