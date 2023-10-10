import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/plugins": resolve(__dirname, "src/plugins/"),
      "@/views": resolve(__dirname, "src/views/"),
      "@/config": resolve(__dirname, "src/config/"),
      "@/untils": resolve(__dirname, "src/untils/"),
      "@/assets": resolve(__dirname, "src/assets/"),
    },
  },
  server: {
    proxy: {
      "/v2/api": {
        target: "https://test.opcloud.com/v2/api",
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v2\/api/, ""),
      },
    },
  },
});
