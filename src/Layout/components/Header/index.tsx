import { WapNav, Search, Cross } from '@react-vant/icons';

import styles from './index.module.less';
import { menuAtom } from '@/stores/modules/menu';
import { useAtom } from 'helux';
import { LogoutOutlined, StarOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Avatar, ConfigProvider, MenuProps } from 'antd';

export const Header = () => {
  const [menuState, setMenuState] = useAtom(menuAtom);
  const items: MenuProps['items'] = [
    {
      key: 'personal',
      label: '个人中心',
      icon: <UserOutlined />,
      onClick: () => {
        console.log('logoutClick');
      },
    },
    {
      key: 'favorites',
      label: '我的收藏',
      icon: <StarOutlined />,
      onClick: () => {
        console.log('logoutClick');
      },
    },
    {
      key: 'changePassword',
      label: '修改密码',
      icon: <ToolOutlined />,
      onClick: () => {
        console.log('logoutClick');
      },
    },
    {
      key: 'logout',
      label: '退出登录',
      icon: <LogoutOutlined />,
      onClick: () => {
        console.log('logoutClick');
      },
    },
  ];
  const handleMenuIconClick = () => {
    setMenuState((old) => ({ ...old, popupMenuShow: !menuState.popupMenuShow }));
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.left_container}>
        <div className={styles.menu_icon} onClick={handleMenuIconClick}>
          {menuState.popupMenuShow ? <Cross /> : <WapNav />}
        </div>
        <div className={styles.header_logo}> Intelli Stock </div>
      </div>
      <div className={styles.right_container}>
        <div className={styles.search_container}>
          <Search />
        </div>
        <div className={styles.user_container}>
          <ConfigProvider
            theme={{
              components: {
                Dropdown: {
                  /* 这里是你的组件 token */
                  zIndexPopup: 2100,
                },
              },
            }}
          >
            <Dropdown className={styles.user_container} menu={{ items }}>
              <div className={styles.user_container}>
                <Avatar icon={<UserOutlined />} size="default" />
              </div>
            </Dropdown>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};
