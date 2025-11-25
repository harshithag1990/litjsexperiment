import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/reusable-components/user-avatar.ts',
      name: 'UserAvatar',
      fileName: (format) => `user-avatar.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});
