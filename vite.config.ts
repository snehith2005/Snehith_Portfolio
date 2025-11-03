import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // ensures correct asset paths in production

  server: {
    host: true,  // instead of "::"
    port: 8080,  // for local dev
  },

  preview: {
    host: true,  // required for Render
    port: 10000, // Render uses this internally
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
