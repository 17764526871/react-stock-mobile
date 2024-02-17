import { Link } from 'react-router-dom';
import styles from './index.module.less';
import classNames from 'classNames';
import { Icon } from '@/components';
import { menuAtom } from '@/stores';
import { useAtom } from 'helux';
import { useNavigate } from 'react-router-dom';

export const MenuComponent = () => {
  const navigate = useNavigate();
  const [menuState, setMenuState] = useAtom(menuAtom);

  const handleMenuCellClick = (menuItem) => {
    // 设置按钮高亮，跳转路由，关闭弹框
    navigate(menuItem.path);
    setMenuState((oldData) => {
      console.log(oldData);
      return {
        ...oldData,
        activeMenu: menuItem.path,
        popupMenuShow: false,
      };
    });
  };
  return (
    <div className={styles.menu_component_container}>
      <div>
        菜单
        <Link to="/login">路由</Link>
        <Link to="/example">案例</Link>
        <Link to="/login">登录</Link>
        <Link to="/">首页</Link>
        <Link to="/404">404</Link>
      </div>
      {menuState.menuData.map((data) => (
        <div key={data.key} className={styles.menu_item}>
          {data.showTitle ? (
            <div className={styles.menu_item_title}>
              {data.icon ? (
                <span className={styles.title_icon}>
                  <Icon
                    className={data.icon}
                    style={{ fontSize: 20, marginRight: 10, fontWeight: 900 }}
                  ></Icon>
                </span>
              ) : (
                ''
              )}
              <span className={styles.title_text}>{data.title}</span>
            </div>
          ) : (
            ''
          )}
          {data.children &&
            data.children.length > 0 &&
            data.children.map((child) => (
              <div
                key={child.key}
                className={classNames(
                  styles.menu_item_cell,
                  menuState.activeMenu === child.path ? styles.menu_item_cell_active : '',
                )}
                onClick={() => handleMenuCellClick(child)}
              >
                {child.icon ? (
                  <span className={styles.cell_icon}>
                    <Icon
                      className={child.icon}
                      style={{ fontSize: 20, marginRight: 10, fontWeight: 900 }}
                    ></Icon>
                  </span>
                ) : (
                  ''
                )}
                <span className={styles.cell_text}>{child.title}</span>
              </div>
            ))}
          <div className={styles.menu_line}></div>
        </div>
      ))}
    </div>
  );
};
