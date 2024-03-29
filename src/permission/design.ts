import { MenuTreeType } from './menuType';

export const menuTree: MenuTreeType[] = [
  {
    name: '自选股',
    type: 'menu',
    icon: '自选股',
    permissionKey: 'submenu04',
    routePath: '/self_select_stock',
    children: [
      {
        name: '自选股重要性评分',
        icon: '功能定义',
        permissionKey: 'Portfolio_News_Rating',
        type: 'function',
      },
    ],
  },
  {
    name: '自然选股',
    type: 'menu',
    icon: '功能定义',
    permissionKey: 'textStockSelect',
    routePath: '/langStockSelect',
    hideInMenu: true,
  },
  {
    name: '股票聊天PDF管理',
    type: 'menu',
    icon: '功能定义',
    permissionKey: 'StockChatPDF_Manager',
    routePath: '/stock_chat_pdf_manager',
    hideInMenu: true,
    children: [
      {
        name: '聊天PDF新增',
        permissionKey: 'stockchatPDF_Add',
        icon: '功能定义',
        type: 'function',
      },
      {
        name: '聊天PDF修改',
        permissionKey: 'stockchatPDF_Edit',
        icon: '功能定义',
        type: 'function',
      },
      {
        name: '聊天PDF删除',
        permissionKey: 'stockchatPDF_Delete',
        icon: '功能定义',
        type: 'function',
      },
    ],
  },
  {
    name: '主题新闻',
    type: 'menu',
    icon: '主题新闻',
    permissionKey: 'submenu07',
    routePath: '/topic_news',
    children: [
      {
        name: '主题涨跌幅',
        permissionKey: 'News_ThemeRate',
        icon: '功能定义',
        type: 'function',
      },
      {
        name: '自定义主题',
        icon: '功能定义',
        permissionKey: 'TopicNews_CustomTheme',
        type: 'function',
      },
      {
        name: '订阅主题',
        icon: '功能定义',
        permissionKey: 'TopicNews_SubscribeTheme',
        type: 'function',
      },
      {
        name: '查看股票',
        icon: '功能定义',
        permissionKey: 'submenu07_stocklist',
        type: 'function',
      },
      {
        name: '查看走势',
        icon: '功能定义',
        permissionKey: 'submenu07_stockspct',
        type: 'function',
      },
      {
        name: '查看新闻总结',
        icon: '功能定义',
        permissionKey: 'News_Sum',
        type: 'function',
      },
      {
        name: '重要性评分',
        icon: '功能定义',
        permissionKey: 'News_Rating',
        type: 'function',
      },
    ],
  },
  {
    name: '电话会议',
    type: 'menu',
    icon: '电话会议',
    permissionKey: 'submenu06',
    routePath: '/teleconference',
    children: [
      {
        name: '查看时间线',
        icon: '功能定义',
        permissionKey: 'PhoneConference_Timeline',
        type: 'function',
      },
      {
        name: '新增',
        icon: '功能定义',
        permissionKey: 'PhoneConference_Add',
        type: 'function',
      },
      {
        name: '修改',
        icon: '功能定义',
        permissionKey: 'PhoneConference_Edit',
        type: 'function',
      },
      {
        name: '删除',
        icon: '功能定义',
        permissionKey: 'PhoneConference_Delete',
        type: 'function',
      },
    ],
  },
  {
    name: '会议管理',
    type: 'menu',
    icon: '功能定义',
    permissionKey: 'callManagement',
    routePath: '/teleconference',
    hideInMenu: true,
    children: [
      {
        name: '新增',
        icon: '功能定义',
        permissionKey: 'MeetingManager_Add',
        type: 'function',
      },
      {
        name: '修改',
        icon: '功能定义',
        permissionKey: 'MeetingManager_Edit',
        type: 'function',
      },
      {
        name: '删除',
        icon: '功能定义',
        permissionKey: 'MeetingManager_Delete',
        type: 'function',
      },
    ],
  },
  {
    name: '内部研报',
    type: 'menu',
    icon: '内部研报',
    permissionKey: 'InternalResearch',
    routePath: '/internal_research_report',
    children: [
      {
        name: '新增',
        icon: '功能定义',
        permissionKey: 'InternalResearch_Add',
        type: 'function',
      },
      {
        name: '修改',
        icon: '功能定义',
        permissionKey: 'InternalResearch_Edit',
        type: 'function',
      },
      {
        name: '删除',
        icon: '功能定义',
        permissionKey: 'InternalResearch_Delete',
        type: 'function',
      },
    ],
  },
  {
    name: '券商研报',
    type: 'menu',
    icon: '功能定义',
    permissionKey: 'submenu999',
    routePath: '/securities',
    hideInMenu: true,
    children: [
      {
        name: '显示原文',
        icon: '功能定义',
        permissionKey: 'submenu05',
        type: 'function',
      },
      {
        name: '解析原文',
        icon: '功能定义',
        permissionKey: 'pdfsource',
        type: 'function',
      },
    ],
  },
  {
    name: '股票聊天',
    type: 'menu',
    icon: '股票聊天',
    permissionKey: 'submenu08',
    routePath: '/stock_chat',
    children: [
      {
        name: '参考Tooltip',
        permissionKey: 'StockChat_ReferencesTooltip',
        icon: '功能定义',
        type: 'function',
      },
      {
        name: '选择聊天模式',
        permissionKey: 'StockChat_SelectMode',
        icon: '功能定义',
        type: 'function',
      },
    ],
  },
  {
    name: '宏观策略',
    type: 'menu',
    icon: '宏观策略',
    permissionKey: 'MacroStrategy',
    routePath: '/macro_strategy',
  },
  {
    name: '系统管理',
    type: 'catalogue',
    icon: '系统管理',
    permissionKey: 'submanager02',
    children: [
      {
        name: '菜单设计',
        type: 'menu',
        icon: '功能定义',
        permissionKey: 'PermissionManager',
        routePath: '/permission_manager',
      },
      {
        name: '角色管理',
        type: 'menu',
        icon: '角色管理',
        permissionKey: 'submanager02',
        routePath: '/role_manager',
        children: [
          {
            name: '新增',
            icon: '功能定义',
            permissionKey: 'RoleManager_Add',
            type: 'function',
          },
          {
            name: '修改',
            icon: '功能定义',
            permissionKey: 'RoleManager_Edit',
            type: 'function',
          },
          {
            name: '删除',
            icon: '功能定义',
            permissionKey: 'RoleManager_Delete',
            type: 'function',
          },
          {
            name: '查询',
            icon: '功能定义',
            permissionKey: 'RoleManager_Query',
            type: 'function',
          },
        ],
      },
      {
        name: '用户管理',
        type: 'menu',
        icon: '用户管理',
        permissionKey: 'submanager01',
        routePath: '/user_manager',
        children: [
          {
            name: '刷新缓存',
            icon: '功能定义',
            permissionKey: 'submanager03',
            type: 'function',
          },
          {
            name: '新增',
            icon: '功能定义',
            permissionKey: 'UserManager_Add',
            type: 'function',
          },
          {
            name: '修改',
            icon: '功能定义',
            permissionKey: 'UserManager_Edit',
            type: 'function',
          },
          {
            name: '删除',
            icon: '功能定义',
            permissionKey: 'UserManager_Delete',
            type: 'function',
          },
          {
            name: '查询',
            icon: '功能定义',
            permissionKey: 'UserManager_Query',
            type: 'function',
          },
        ],
      },
      {
        name: '菜单管理',
        type: 'menu',
        icon: '菜单管理',
        permissionKey: 'submanager_menu',
        routePath: '/menu_manager',
      },
      {
        name: '公司管理',
        type: 'menu',
        icon: '公司管理',
        permissionKey: 'companyMgmt',
        routePath: '/company_manager',
        children: [
          {
            name: '新增',
            icon: '功能定义',
            permissionKey: 'CompanyManager_Add',
            type: 'function',
          },
          {
            name: '修改',
            icon: '功能定义',
            permissionKey: 'CompanyManager_Edit',
            type: 'function',
          },
          {
            name: '删除',
            icon: '功能定义',
            permissionKey: 'CompanyManager_Delete',
            type: 'function',
          },
          {
            name: '查询',
            icon: '功能定义',
            permissionKey: 'CompanyManager_Query',
            type: 'function',
          },
        ],
      },
    ],
  },
];
