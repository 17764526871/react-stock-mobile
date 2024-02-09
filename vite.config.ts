import { defineConfig } from 'vite';
import { viteReact } from './plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/mobile',
  server: {
    host: '0.0.0.0',
    port: 9002,
    proxy: {
      '/api': {
        target: 'https://test.intellistock.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
