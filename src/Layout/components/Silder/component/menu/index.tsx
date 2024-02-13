import { Link } from 'react-router-dom';
import styles from './index.module.less';
import { WapHomeO, Bars, } from '@react-vant/icons';
import classNames from 'classNames';
import { useState } from 'react';
import { Icon } from '@/components';

export const MenuComponent = () => {
  const [activeIcon, setActiveIcon] = useState('/');

  return (
    <div className={styles.menu_component_container}>
      <div>
        菜单
        <Link to="/login">登录</Link>
        <Link to="/example">案例</Link>
        <Link to="/">首页</Link>
        <Link to="/404">404</Link>
        <Link to="/system_manager/user_manager">jsggl</Link>
        <Link to="/system_manager/company_manager">公司管理</Link>
      </div>

      <div className={classNames(styles.menu_item, styles.menu_item_base)}>
        <div
          className={classNames(
            styles.menu_item_cell,
            activeIcon === '/' ? styles.menu_item_cell_active : '',
          )}
        >
          <span className={styles.cell_icon}>
            <Icon className="erji-caidanguanli" style={{fontSize:24}}></Icon>
          </span>
          <span className={styles.cell_text}>Home</span>
        </div>
        <div className={styles.menu_item_cell}>
          <span className={styles.cell_icon}>
            <WapHomeO />
          </span>
          <span className={styles.cell_text}>anli</span>
        </div>
      </div>

      <div className={classNames(styles.menu_item_children, styles.menu_item_base)}>
        <div className={styles.menu_item_children_title}>
          <span className={styles.title_icon}>
            <Bars />
          </span>
          <span className={styles.title_text}>后台管理</span>
        </div>
        <div
          className={classNames(
            styles.menu_item_children_cell,
            activeIcon === '/' ? styles.menu_item_cell_active : '',
          )}
        >
          <span className={styles.cell_text}>用户管理</span>
        </div>
        <div className={styles.menu_item_children_cell}>
          <span className={styles.cell_text}>菜单管理</span>
        </div>
      </div>
    </div>
  );
};
