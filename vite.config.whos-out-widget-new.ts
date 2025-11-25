import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/whos-out-widget-new.ts',
      name: 'WhosOutWidgetNew',
      fileName: (format) => `whos-out-widget-new.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});
