import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/reusable-components/employee-activity-list.ts',
      name: 'EmployeeActivityList',
      fileName: (format) => `employee-activity-list.${format}.js`,
      formats: ['es', 'umd']
    }
  }
});