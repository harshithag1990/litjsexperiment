import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      name: 'MyElement',
      fileName: (format) => `my-element.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // external: ['lit'],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
