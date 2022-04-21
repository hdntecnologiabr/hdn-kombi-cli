/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_APP_LANGUAGE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
