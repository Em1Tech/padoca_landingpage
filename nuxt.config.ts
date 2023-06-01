export default defineNuxtConfig({
  app: {
    head: {
      title: "home | Padoca",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: ["~/assets/main.css"],

  modules: [
    // pinia plugin
    "@pinia/nuxt",
    ["@nuxtjs/tailwindcss", { config: "@/tailwind.config.js" }],
  ],

  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  // tailwindcss height 940px
  tailwindcss: {
    viewer: process.env.ENV === "development",
  },
});
