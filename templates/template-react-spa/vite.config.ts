/// <reference types="vitest" />

import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  // const { default: SonarReporter } = await import("vitest-sonar-reporter");

  return {
    test: {
      globals: true,
      clearMocks: true,
      environment: "jsdom",
      setupFiles: "config/test/setupTests.ts",
      // reporters: new SonarReporter(),
      // outputFile: "coverage/sonar-report.xml",
      coverage: {
        reporter: ["cobertura", "html", "lcov", "text-summary", "text"],
      },
    },
    plugins: [
      react({
        babel: {
          babelrc: true,
        },
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
            description: env.VITE_APP_DESCRIPTION,
          },
        },
      }),
      tsconfigPaths(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
        manifest: {
          name: env.VITE_APP_TITLE,
          description: env.VITE_APP_DESCRIPTION,
          short_name: "VUC",
          theme_color: "#ffffff",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
  };
});
