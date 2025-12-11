import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  css:['./app/assets/css/main.css'],
  vite:{
    plugins:[tailwindcss()]
  },
  nitro:{
    preset: 'static'
  },
  app: {
    baseURL: '/portfolio/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true }
})
