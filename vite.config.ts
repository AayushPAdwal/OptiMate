import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import { notBundle } from "vite-plugin-electron/plugin";

export default defineConfig({
  plugins: [
    react(),

    electron([
      // Electron Main Process
      {
        entry: "electron/main.ts",
        vite: {
          plugins: [notBundle()],
        },
      },

      // Electron Preload Process
      {
        entry: "electron/preload.ts",
        vite: {
          build: {
            rolldownOptions: {
              output: {
                format: "cjs",
                entryFileNames: "preload.mjs",
                inlineDynamicImports: true,
              },
            },
          },
        },
        onstart(options) {
          options.reload();
        },
      },
    ]),
  ],
});