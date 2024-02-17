import { router } from './router';

export class RouterNavigate {
  /** 返回上一页 */
  static goBack() {
    router.navigate(-1);
  }

  /** 前往首页 */
  static goHome() {
    router.navigate('/');
  }

  /** 前往登录页 */
  static goLogin() {
    router.navigate('/login');
  }
}
