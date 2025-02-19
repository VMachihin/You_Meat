import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/app/styles/helpers' as *;`,
      },
    },
  },
});
