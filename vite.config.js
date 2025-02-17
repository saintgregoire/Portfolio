import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      svg: {
        plugins: [
          "removeDoctype",
          "removeXMLProcInst",
          "minifyStyles",
          "sortAttrs",
          "sortDefsChildren",
        ],
      },
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70
      },
      webp: {
        quality: 70,
        lossless: true
      }
    }),
  ],
});
