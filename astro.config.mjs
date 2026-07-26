import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.drkorel.mx",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
