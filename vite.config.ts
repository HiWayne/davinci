import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { posix } from 'path';

const resolve = (relativePath: string) =>
  posix.join(posix.resolve('./'), relativePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: resolve('src/pages'),
      router: resolve('src/router'),
      '@': resolve('src'),
      assets: resolve('./src/assets'),
    },
  },
  server: {
    host: 'dev.duitang.net',
    open: true,
    proxy: {
      '/napi/': {
        target: 'https://www.duitang.com',
        changeOrigin: true,
      },
      '/operator/': {
        target: 'https://operate.duitang.com',
        changeOrigin: true,
      },
      '/api/': {
        target: 'https://operate.duitang.com',
        changeOrigin: true,
      },
      '/login/v2/': {
        target: 'https://www.duitang.com',
        changeOrigin: true,
      },
      '/m/': {
        target: 'https://operate.duitang.com',
        changeOrigin: true,
      },
    },
  },
});
