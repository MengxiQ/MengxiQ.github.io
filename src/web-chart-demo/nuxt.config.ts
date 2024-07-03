// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ },
  devtools: { enabled: true },
  experimental: {
    //_payload.json 404的问题
    payloadExtraction: false,
  },
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
