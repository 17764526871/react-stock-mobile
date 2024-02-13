import styles from './index.module.less';
import { Silder } from './components/Silder';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

export const Layout = () => (
  <div className={styles.layout_container}>
    <Silder />
    <div className="">
      <Header />
    </div>
    <div className={styles.center_container}>
      <Outlet />
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
);
