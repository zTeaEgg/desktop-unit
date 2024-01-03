import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import electron from "vite-plugin-electron";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      entry: "electron/main.ts"
    })
  ],
  build: {
    emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
    outDir: "dist"
  },
})
