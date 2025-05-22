import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@features': path.resolve(__dirname, './src/features'),
      '@config': path.resolve(__dirname, './src/app/config'),
      '@store': path.resolve(__dirname, './src/app/store'), // Removed space
      '@services': path.resolve(__dirname, './src/app/services'), // Removed space
      '@hooks': path.resolve(__dirname, './src/app/hooks'),
    },
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'dist',
  },
});
