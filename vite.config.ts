// vite.config.ts
import { defineConfig } from "vite";

/**
 * Use an async config and dynamic import for ESM-only plugins
 * (avoids "ESM file cannot be loaded by require" esbuild error).
 *
 * For a root GitHub Pages site (usqcd.github.io) we set base: "/".
 * Ensure build.outDir matches your deploy workflow (here: "build").
 */
export default defineConfig(async () => {
  const reactPlugin = (await import("@vitejs/plugin-react")).default;

  return {
    base: "/",
    plugins: [reactPlugin()],
    build: {
      outDir: "build",
      sourcemap: false,
      chunkSizeWarningLimit: 2000
    },
    server: {
      port: 5173
    }
  };
});