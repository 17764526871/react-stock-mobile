import styles from './index.module.less';
import { Silder } from './components/Silder';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className={styles.layout_container}>
      <div className={styles.silder_container}>
        <Silder />
      </div>
      <div className={styles.right_container}>
        <div className={styles.header_container}>
          <Header />
        </div>
        <div className={styles.router_container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
