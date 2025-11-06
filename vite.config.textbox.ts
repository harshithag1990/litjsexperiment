import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/textbox.ts',
      name: 'TextBox',
      fileName: (format) => `textbox.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});