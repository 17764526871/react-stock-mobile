import { registerUpdateNotification } from './modules/updateNotification';
import { registerUpdateUserInfo } from './modules/updateUserInfo';
import { registerApiInterceptors } from './modules/api';

/** 注册所有插件 */
export const registerAllPlugins = () => {
  registerApiInterceptors();
  registerUpdateNotification();
  registerUpdateUserInfo();
};
