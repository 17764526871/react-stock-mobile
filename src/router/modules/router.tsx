import { createHashRouter } from 'react-router-dom';
import { Layout } from '@/Layout';
import { Home, NotFound } from '@/pages';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },

  {
    path: '*',
    Component: NotFound,
  },
]);
