import { glob } from "glob";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const tree = glob.sync("!(node_modules)/**");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "test/index": "test/index.tsx"
      }
    },
    outDir: "./.dist",
    assetsDir: "chunks",
  },

  root: ".",
  publicDir: ".",
  base: "/",
  define: {
    __TREE__: tree,
  },
})
