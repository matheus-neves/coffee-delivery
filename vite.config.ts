import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src', 'components')
      },
      { find: '@styles', replacement: resolve(__dirname, 'src', 'styles') },
      { find: '@pages', replacement: resolve(__dirname, 'src', 'pages') },
      { find: '@styles', replacement: resolve(__dirname, 'src', 'styles') },
      { find: '@assets', replacement: resolve(__dirname, 'src', 'assets') },
      { find: '@services', replacement: resolve(__dirname, 'src', 'services') }
    ]
  },
  server: {
    host: true,
    port: 3000
  }
});
