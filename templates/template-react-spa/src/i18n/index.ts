import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./locales/enUS/common.json";
import ptBR from "./locales/ptBR/common.json";

const resources = {
  "en-US": {
    translation: enUS,
  },
  "pt-BR": {
    translation: ptBR,
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  lng: "pt-BR",
  fallbackLng: "pt-BR",
});

export default i18n;
