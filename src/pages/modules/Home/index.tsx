import styles from './index.module.less';
export const Home = () => (
  <div
    style={{
      height: '300vh',
      backgroundColor: 'green',
      padding: 12,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    home
    <div className={styles.son_box}> 这是首页里的组件</div>
  </div>
);
