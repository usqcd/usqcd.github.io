// vite.config.ts
import { defineConfig } from "vite";

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