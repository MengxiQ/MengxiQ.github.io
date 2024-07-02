// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/apps/web-chart-demo/',
    // 默认的_nuxt目录会被服务器拦截
    buildAssetsDir: "/nuxt/",
  },
  nitro: {
    output: {
      publicDir: '../../apps/web-chart-demo/'
    }
  }
})
