import { CartCircleO, ChatO, GoldCoinO, Plus, StarO, WapHomeO } from '@react-vant/icons';
import styles from './index.module.less';
import { Flex, FloatingBall, Toast } from 'react-vant';
import classNames from 'classNames';

const icons = [StarO, CartCircleO, GoldCoinO, WapHomeO, ChatO];

export const FloatMenu = ({ menu = {}, ...props }) => (
  <FloatingBall
    className={styles.demo_floating_box}
    offset={{
      right: 10,
      bottom: '14vh',
    }}
    adsorb={{ indent: 0.1, distance: 10 }}
    menu={{
      ...menu,
      items: icons.map((Ico, i) => (
        <Flex
          align="center"
          justify="center"
          onClick={() => Toast.info(`点击了第${i + 1}个`)}
          key={i}
          className={styles.menu_item}
        >
          <Ico />
        </Flex>
      )),
    }}
    {...props}
  >
    {({ active }) => (
      <Flex
        align="center"
        justify="center"
        className={classNames(styles.main_button, active ? styles.main_button_active : '')}
      >
        <Plus />
      </Flex>
    )}
  </FloatingBall>
);
