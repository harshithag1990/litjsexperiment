import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/upcoming-birthdays-widget.ts',
      name: 'UpcomingBirthdays',
      fileName: (format) => `upcoming-birthdays-widget.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});