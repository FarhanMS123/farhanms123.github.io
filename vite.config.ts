import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { virtualRouter } from './src/plugin/files-router'
import DynamicPublicDirectory from "vite-multiple-assets"
import { defaultExcluded } from './src/plugin/templates'
import { showConfig } from './src/plugin/inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // showConfig,
    DynamicPublicDirectory(["public"], {}),
    showConfig,
    /* virtualRouter({
      scanDir: ".",
      excluded: [...defaultExcluded]
    }), */
    // splitVendorChunkPlugin(),
    react(),
  ],

  build: {
    rollupOptions: {
      external: (id, parentId, isResolved) => {
        console.log(id, parentId, isResolved);
        return false;
      },
    },
    outDir: "dist",
    assetsDir: "chunks",
  },

  root: process.cwd(),
  publicDir: false,
  base: "/",
})
