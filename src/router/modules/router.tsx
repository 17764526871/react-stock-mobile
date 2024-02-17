import { LoaderFunctionArgs, RouterProvider, createHashRouter, redirect } from 'react-router-dom';
import { Layout } from '@/Layout';
import { Example, Home, Login, NotFound } from '@/pages';
import { authAtom } from '@/stores';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    loader: protectedLoader,
    children: [
      {
        index: true,

        loader: protectedLoader,
        element: <Home></Home>,
      },
      {
        path: '/example',

        loader: protectedLoader,
        element: <Example></Example>,
      },
      {
        path: '/portfolio',

        loader: protectedLoader,
        element: <div>自选股</div>,
      },
      {
        path: '/langStockSelect',

        loader: protectedLoader,
        element: <div>自然选股</div>,
      },
      {
        path: '/news',

        loader: protectedLoader,
        element: <div>主题新闻</div>,
      },
      {
        path: '/conference_call',

        loader: protectedLoader,
        element: <div>电话会议</div>,
      },
      {
        path: '/translate_documents',

        loader: protectedLoader,
        element: <div>翻译文档</div>,
      },
      {
        path: '/internal_research_report',

        loader: protectedLoader,
        element: <div>内部研报</div>,
      },
      {
        path: '/stock_chat',

        loader: protectedLoader,
        element: <div>股票聊天</div>,
      },
      {
        path: '/system_manager',
        children: [
          {
            path: '/system_manager/user_manager',

            loader: protectedLoader,
            element: <div>用户管理</div>,
          },
          {
            path: '/system_manager/role_manager',

            loader: protectedLoader,
            element: <div>角色管理</div>,
          },
          {
            path: '/system_manager/company_manager',

            loader: protectedLoader,
            element: <div>公司管理</div>,
          },
          {
            path: '/system_manager/menu_manager',

            loader: protectedLoader,
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

function protectedLoader({ request }: LoaderFunctionArgs) {
  const AuthStoreStr = JSON.parse(window.localStorage.getItem('AuthStore') as string);
  if (!authAtom.val.userInfo || !AuthStoreStr?.userInfo?.length) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  return null;
}

export const RouterDom = () => <RouterProvider router={router} />;
