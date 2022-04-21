import { initReactI18next } from "react-i18next";

import { use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./locales/enUS/common.json";
import ptBR from "./locales/ptBR/common.json";

const resources = {
  ["en-US"]: {
    translation: enUS,
  },
  ["pt-BR"]: {
    translation: ptBR,
  },
};

const i18n = use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: import.meta.env.VITE_APP_LANGUAGE ?? "pt-BR",
});

export { i18n };
