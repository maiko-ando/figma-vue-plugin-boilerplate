import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: 'ui',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: false,
    rollupOptions: {
      input: 'ui/index.html',
    },
    minify: true,
    cssCodeSplit: false,
    assetsInlineLimit: Infinity
  },
  plugins: [vue(),
  viteSingleFile({ removeViteModuleLoader: true })]
});