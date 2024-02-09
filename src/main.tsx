import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { registerAllPlugins } from '@/plugins';

registerAllPlugins();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
