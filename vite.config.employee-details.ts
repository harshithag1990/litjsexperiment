import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/employee-details-widget.ts',
      name: 'EmployeeDetails',
      fileName: (format) => `employee-details-widget.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});