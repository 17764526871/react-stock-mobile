import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Layout } from '@/Layout';
import { Example, Home, Login, NotFound } from '@/pages';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/example',
        element: <Example></Example>,
      },
      {
        path: '/portfolio',
        element: <div>自选股</div>,
      },
      {
        path: '/langStockSelect',
        element: <div>自然选股</div>,
      },
      {
        path: '/news',
        element: <div>主题新闻</div>,
      },
      {
        path: '/conference_call',
        element: <div>电话会议</div>,
      },
      {
        path: '/translate_documents',
        element: <div>翻译文档</div>,
      },
      {
        path: '/internal_research_report',
        element: <div>内部研报</div>,
      },
      {
        path: '/stock_chat',
        element: <div>股票聊天</div>,
      },
      {
        path: '/system_manager',
        children: [
          {
            path: '/system_manager/user_manager',
            element: <div>用户管理</div>,
          },
          {
            path: '/system_manager/role_manager',
            element: <div>角色管理</div>,
          },
          {
            path: '/system_manager/company_manager',
            element: <div>公司管理</div>,
          },
          {
            path: '/system_manager/menu_manager',
            element: <div>菜单管理</div>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const RouterDom = () => <RouterProvider router={router} />;
