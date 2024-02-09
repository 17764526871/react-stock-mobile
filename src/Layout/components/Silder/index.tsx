import styles from './index.module.less';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuTree, MenuTreeType, calcUserHasMenuTree } from 'intellistock-permission';
import { router } from '@/router';
import { useLocation } from 'react-router-dom';
import { AppstoreTwoTone } from '@ant-design/icons';
import { authAtom } from '@/stores';
import { useAtom } from 'helux';

const calcMenuTree = (menuTree: MenuTreeType[]): MenuProps['items'] => {
  return menuTree.map((item) => ({
    label: item.name,
    icon: <AppstoreTwoTone />,
    onClick: () => {
      if (item.type === 'menu') {
        router.navigate(item.routePath);
      }
    },
    key: item.type === 'catalogue' ? item.permissionKey : item.routePath,
    children: item.type === 'catalogue' && calcMenuTree(item.children),
  }));
};

export const Silder = () => {
  const [auth] = useAtom(authAtom);

  const userHasMenuTree = calcUserHasMenuTree(menuTree, auth.userInfo?.UserAccess || []);

  const items: MenuProps['items'] = calcMenuTree(userHasMenuTree);

  const location = useLocation();

  return (
    <div className={styles.silder_box}>
      <div className={styles.icon_box}>
        <span className={styles.icon_font}>Intelli Stock</span>
      </div>
      <div className={styles.menu_box}>
        <Menu
          style={{ width: 180 }}
          selectedKeys={[location.pathname]}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  );
};
