import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: "aleksandarterter.github.io/zmey",
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
