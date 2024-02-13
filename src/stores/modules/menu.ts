import { atom } from 'helux';

interface menuDataInfoBase {
  path: string;
  key: string;
  title: string;
  icon: string;
}
interface menuDataInfo extends menuDataInfoBase {
  children?: menuDataInfoBase[];
}
  const menuData: menuDataInfo[] = [
    {
      path: '/',
      key: '/',
      title: '首页',
      icon: 'WapHomeO',
    },
    {
      path: '/example',
      key: '/example',
      title: '案例',
      icon: 'WapHomeO',
    },
    {
      path: '/portfolio',
      key: '/portfolio',
      title: '自选股',
      icon: 'SolutionOutlined',
    },
    {
      path: '/langStockSelect',
      key: '/langStockSelect',
      title: '自然选股',
      icon: 'SendOutlined',
    },
    {
      path: '/news',
      key: '/news',
      title: '主题新闻',
      icon: 'crown',
    },
    {
      path: '/conference_call',
      key: '/conference_call',
      title: '电话会议',
      icon: 'PhoneOutlined',
    },
    {
      path: '/translate_documents',
      key: '/translate_documents',
      title: '翻译文档',
      icon: 'PhoneOutlined',
    },
    {
      path: '/internal_research_report',
      key: '/internal_research_report',
      title: '内部研报',
      icon: 'FileSearchOutlined',
    },
    {
      path: '/stock_chat',
      key: '/stock_chat',
      title: '股票聊天',
      icon: 'MessageOutlined',
    },
    {
      path: '/system_manager',
      key: 'example',
      title: '系统管理',
      icon: 'WapHomeO',
      children: [
        {
          path: '/system_manager/user_manager',
          key: '/system_manager/user_manager',
          title: '用户管理',
          icon: 'WapHomeO',
        },
        {
          path: '/system_manager/role_manager',
          key: '/system_manager/role_manager',
          title: '角色管理',
          icon: 'WapHomeO',
        },
        {
          path: '/system_manager/company_manager',
          key: '/system_manager/company_manager',
          title: '公司管理',
          icon: 'WapHomeO',
        },
        {
          path: '/system_manager/menu_manager',
          key: '/system_manager/menu_manager',
          title: '菜单管理',
          icon: 'WapHomeO',
        },
      ],
    },
  ];
const [menuAtom, setMenu] = atom({
  popupMenuShow: false,
  menuData: menuData,
});


export { menuAtom, setMenu };