// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/apps/web-chart-demo/',
    // buildAssetsDir: "/apps/web-chart-demo/_nuxt/"
  },
  // buildDir: '../../apps/web-chart-demo/_nuxt',
  nitro: {
    output: {
      publicDir: '../../apps/web-chart-demo/'
    }
  }
})
