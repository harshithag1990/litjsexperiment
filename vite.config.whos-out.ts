import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/whos-out-widget.ts',
      name: 'WhosOut',
      fileName: (format) => `whos-out-widget.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});