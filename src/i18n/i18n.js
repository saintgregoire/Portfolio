import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

function userConsentedToCookies() {
  return Cookies.get("cookiesConsent") === "true";
}

const initI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslation,
        },
        fr: {
          translation: frTranslation,
        },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: userConsentedToCookies()
          ? ["cookie", "localStorage", "navigator"]
          : ["localStorage", "navigator"],
        caches: userConsentedToCookies() ? ["cookie"] : [],
      },
    });
};

initI18n();

export const reloadI18n = () => {
  i18n.reloadResources().then(() => {
    initI18n();
  });
}

export default i18n;
