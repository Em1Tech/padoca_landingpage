export default defineNuxtConfig({
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
