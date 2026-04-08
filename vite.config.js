import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site: https://Smoke221.github.io/ — served from repo root
export default defineConfig({
  plugins: [react()],
  base: "/",
});
