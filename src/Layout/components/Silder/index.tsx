import { Popup } from 'react-vant';
import styles from './index.module.less';
import { menuAtom } from '@/stores/modules/menu';
import { useAtom } from 'helux';
import { MenuComponent } from './component/menu';

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
  const [menuState, setMenuState] = useAtom(menuAtom);

  const onClose = () => {
    setMenuState((res) => ({ ...res, popupMenuShow: false }));
  };
  return (
    <Popup
      visible={menuState.popupMenuShow}
      className={styles.silder_box}
      position="left"
      onClose={onClose}
    >
      <MenuComponent></MenuComponent>
    </Popup>
  );
};
