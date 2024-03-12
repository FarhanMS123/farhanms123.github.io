import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { virtualRouter } from './src/plugin/files-router'
import DynamicPublicDirectory from "vite-multiple-assets"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DynamicPublicDirectory([], {}),
    virtualRouter({
      scanDir: ".",
    }),
    splitVendorChunkPlugin(),
    react(),
  ],

  build: {
    rollupOptions: {
      external: /^(.git|.*\.local|dist|node_modules|\.html)$/ig,
    },
    outDir: "dist",
    assetsDir: "chunks",
  },

  root: process.cwd(),
  publicDir: ".",
  base: "/",
})
