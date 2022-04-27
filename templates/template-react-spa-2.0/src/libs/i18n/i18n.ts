import { initReactI18next } from "react-i18next";

import enUS from "~/languages/enUS/common.json";
import ptBR from "~/languages/ptBR/common.json";
import { FALLBACK_LANGUAGE } from "~/utils/constants";
import { Resource, use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
  fallbackLng: FALLBACK_LANGUAGE,
});

export { i18n };
