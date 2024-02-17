import styles from './index.module.less';
import { Silder } from './components/Silder';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { FloatMenu } from './components/floatMenu';
import { useState } from 'react';
import { FloatingBallProps } from 'react-vant';

export const Layout = () => {
  const [config] = useState<FloatingBallProps & Record<string, unknown>>({
    menu: {
      direction: 'vertical',
    },
    // draggable: true,
    // offset: {
    //   right: 20,
    //   bottom: '10vh',
    // },
  });

  return (
    <div className={styles.layout_container}>
      <FloatMenu {...config}></FloatMenu>
      <Silder />
      <div className="">
        <Header />
      </div>
      <div className={styles.center_container}>
        <Outlet />
      </div>
      {/* <div>
      <Footer></Footer>
    </div> */}
    </div>
  );
};
