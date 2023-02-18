/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    include: ["src/test/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      provider: "istanbul"
    }
  },
  build: {
    lib: {
      entry: "./src/lib/index.js",
      name: "myLib",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    outDir: 'lib',
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
