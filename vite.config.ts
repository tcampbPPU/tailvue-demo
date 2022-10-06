import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import windi from "vite-plugin-windicss";

/** @see https://vitejs.dev/config/ */
export default defineConfig({
  plugins: [
    vue(),
    windi({
      config: {
        darkMode: "class",
        extract: {
          include: [
            "src/**.{vue,ts}",
            "node_modules/tailvue/dist/tailvue.es.js",
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
