import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.module.less';
import { RouterDom } from '@/router';
import { registerAllPlugins } from '@/plugins';

registerAllPlugins();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterDom />
  </React.StrictMode>,
);
