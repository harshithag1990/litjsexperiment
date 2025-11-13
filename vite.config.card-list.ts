import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/card-list.ts',
      name: 'CardList',
      fileName: (format) => `card-list.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});


