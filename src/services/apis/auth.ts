import { request } from '../request';
import {
  loginParams,
  loginResponse,
  RegisterUserParams,
  PasswordChangeParams,
  PasswordForgotParams,
} from '../types/auth';

export class AuthApis {
  /** 登录 */
  static login(params: loginParams) {
    return request<loginResponse>({
      url: '/login/',
      method: 'post',
      data: {
        ...params,
      },
    });
  }

  /** 登出 */
  static logout() {
    return request({
      url: '/logout/',
      method: 'post',
    });
  }

  /** 获取用户信息 */
  static getUserInfo() {
    return request<loginResponse>({
      url: '/getUserRole/',
      method: 'post',
    });
  }
  // 修改密码(登录后)
  static passwordChange(data: PasswordChangeParams) {
    return request<any>({
      url: '/PasswordChange/',
      method: 'post',
      data,
    });
  }

  // 密码重置(邮件跳转)
  static passwordForgot(data: PasswordForgotParams) {
    return request({
      url: '/PasswordChangeByEmail/',
      method: 'post',
      data,
    });
  }

  // 注册用户（邮箱跳转）
  static registerUser(data: RegisterUserParams) {
    return request({
      url: '/registerTest/',
      method: 'post',
      data,
    });
  }
}
