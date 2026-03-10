import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: ["**/hammer-icon/**/*.svg", "**/anvil2/assets/icons/**/*.svg"],
      svgrOptions: {
        icon: true,
      },
    }),
    svgr({
      include: "**/*.svg",
      exclude: ["**/hammer-icon/**/*.svg", "**/anvil2/assets/icons/**/*.svg"],
      svgrOptions: {
        icon: false,
      },
    }),
  ],
});
