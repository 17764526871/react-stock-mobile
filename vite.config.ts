import { ConfigEnv, UserConfigExport, loadEnv } from 'vite';
import { viteReact } from './plugins';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  let env = loadEnv(mode, process.cwd());

  return {
    plugins: [viteReact],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    base: '/',
    server: {
      host: '0.0.0.0',
      port: 9002,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
};
