import styles from './index.module.less';
import { Avatar, Dropdown, MenuProps } from 'antd';
import { LogoutOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';
import { AuthActions } from '@/actions';
import { authAtom } from '@/stores';
import { RouterNavigate } from '@/router';
import { useAtom } from 'helux';

export const Header = () => {
  const [auth] = useAtom(authAtom);

  const items: MenuProps['items'] = [
    {
      key: 'changePassword',
      label: '修改密码',
      icon: <ToolOutlined />,
      onClick: () => {
        RouterNavigate.goChangePassword();
      },
    },
    {
      key: 'logout',
      label: '退出登录',
      icon: <LogoutOutlined />,
      onClick: AuthActions.logout,
    },
  ];

  return (
    <div className={styles.header_container}>
      <div className={styles.right_container}>
        <Dropdown className={styles.user_container} menu={{ items }}>
          <div className={styles.user_container}>
            <Avatar
              icon={<UserOutlined />}
              style={{ backgroundColor: 'black', verticalAlign: 'middle' }}
              size="default"
            />
            <span style={{ marginLeft: 6 }}>{auth.userInfo?.UserNickName}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
