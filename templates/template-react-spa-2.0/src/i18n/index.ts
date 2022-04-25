import { initReactI18next } from "react-i18next";

import { VITE_APP_LANGUAGE } from "~/utils/constants";
import i18next, { Resource, use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./locales/enUS/common.json";
import ptBR from "./locales/ptBR/common.json";

const resources: Resource = {
  ["en-US"]: {
    translation: enUS,
  },
  ["pt-BR"]: {
    translation: ptBR,
  },
};

const i18n = use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: VITE_APP_LANGUAGE,
});

export default i18n;

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

console.log(getLanguage());
