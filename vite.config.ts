import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd', 'iife'],
      name: 'lib',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
  },
  plugins: [react(), dts({ rollupTypes: true })],
});