// react函数组件eContentModal';

import { setAuth } from '@/stores';
import { Button } from 'react-vant';

export const Example = () => {
  const handleClick = () => {
    setAuth(() => ({ userInfo: '' }));
  };
  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        清除auth数据
      </Button>
    </div>
  );
};
