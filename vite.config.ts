import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // visualizer({
    //   template: "treemap", // or sunburst
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    //   filename: "analyse.html", // will be saved in project's root
    // }),
    tsconfigPaths(),
  ],

  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: (id) => {
  //         if (id.includes("node_modules")) {
  //           return "unknown-vendor";
  //         }
  //         // For modules that don't belong to "unknown-vendor", return null.
  //         return null;
  //       },
  //     },
  //   },
  // },
});
