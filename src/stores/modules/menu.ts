import { atom } from 'helux';

interface menuDataInfoBase {
  path: string;
  key: string;
  title: string;
  icon?: string;
  showTitle?: boolean;
}
interface menuDataInfo extends menuDataInfoBase {
  children?: menuDataInfoBase[];
}
const menuData: menuDataInfo[] = [
  {
    path: '/',
    key: '/',
    title: '首页',
    icon: 'erji-caidanguanli',
    showTitle: false,
    children: [
      {
        path: '/',
        key: '/',
        title: '首页',
        icon: 'erji-caidanguanli',
      },
      {
        path: '/example',
        key: '/example',
        title: '案例',
        icon: 'chatgpt',
      },
      {
        path: '/portfolio',
        key: '/portfolio',
        title: '自选股',
        icon: 'zxgyanbao',
      },
      {
        path: '/news',
        key: '/news',
        title: '主题新闻',
        icon: 'xinwen',
      },
      {
        path: '/conference_call',
        key: '/conference_call',
        title: '电话会议',
        icon: 'dianhuahuiyi',
      },
      {
        path: '/translate_documents',
        key: '/translate_documents',
        title: '翻译文档',
        icon: 'edit-1-copy',
      },
      {
        path: '/internal_research_report',
        key: '/internal_research_report',
        title: '内部研报',
        icon: 'neibuyanbaoicon',
      },
      {
        path: '/stock_chat',
        key: '/stock_chat',
        title: '股票聊天',
        icon: 'zaixianzixun',
      },
    ],
  },
  {
    path: '/system_manager',
    key: '/system_manager',
    title: '系统管理',
    icon: 'xitongguanli',
    showTitle: true,
    children: [
      {
        path: '/system_manager/user_manager',
        key: '/system_manager/user_manager',
        title: '用户管理',
      },
      {
        path: '/system_manager/role_manager',
        key: '/system_manager/role_manager',
        title: '角色管理',
      },
      {
        path: '/system_manager/company_manager',
        key: '/system_manager/company_manager',
        title: '公司管理',
      },
      {
        path: '/system_manager/menu_manager',
        key: '/system_manager/menu_manager',
        title: '菜单管理',
      },
    ],
  },
];
const [menuAtom, setMenu] = atom({
  popupMenuShow: false,
  activeMenu: '/',
  menuData: menuData,
});

export { menuAtom, setMenu };
