import { message } from 'antd';

export class Messages {
  /** 该功能即将推出，敬请期待！ */
  static coming() {
    message.warning('该功能即将推出，敬请期待！');
  }
}
