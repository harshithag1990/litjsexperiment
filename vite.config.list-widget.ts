import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/reusable-components/list-widget.ts',
      name: 'TextBox',
      fileName: (format) => `list-widget.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});