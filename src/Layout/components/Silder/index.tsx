import { Popup } from 'react-vant';
import styles from './index.module.less';
import { useState } from 'react';

// const calcMenuTree = (menuTree: MenuTreeType[]): MenuProps['items'] => {
//   return menuTree.map((item) => ({
//     label: item.name,
//     icon: <AppstoreTwoTone />,
//     onClick: () => {
//       if (item.type === 'menu') {
//         router.navigate(item.routePath);
//       }
//     },
//     key: item.type === 'catalogue' ? item.permissionKey : item.routePath,
//     children: item.type === 'catalogue' && calcMenuTree(item.children),
//   }));
// };

export const Silder = () => {
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={styles.silder_box}>
      <Popup
        visible={visible}
        style={{ width: '50%', height: '100%' }}
        position="left"
        onClose={onClose}
      >
        <div>菜单</div>
      </Popup>
    </div>
  );
};
