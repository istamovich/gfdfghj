import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uzTranslation from "./src/locales/uz/translation.json";
import enTranslation from "./src/locales/en/translation.json";
import ruTranslation from "./src/locales/ru/translation.json";

const resources = {
  uz: { translation: uzTranslation },
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

export default i18n;
