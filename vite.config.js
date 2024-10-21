import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Outbuild-Front-End/",
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
