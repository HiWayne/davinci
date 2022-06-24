import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { posix } from "path";

const resolve = (relativePath: string) =>
  posix.join(posix.resolve("./"), relativePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: resolve("src/pages"),
      router: resolve("src/router"),
      "@": resolve("src"),
    },
  },
});
