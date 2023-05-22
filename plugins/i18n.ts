import { createI18n } from "vue-i18n";
import en from "../lang/en";
import pt from "../lang/pt";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      pt,
    },
  });

  vueApp.use(i18n);
});
