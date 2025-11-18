import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/reusable-components/field-list-widget.ts',
      name: 'FieldListWidget',
      fileName: (format) => `field-list-widget.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});
