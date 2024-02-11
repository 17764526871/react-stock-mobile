import { request } from '../request';
import { RegisterUserParams } from '../types/auth';
import { UserInfoParams } from '../types/user';

export class userApis {
  static getAllUserData(data: any) {
    return request({
      url: '/getAllUserData/',
      method: 'post',
      loading: true,
      data,
    });
  }

  // 账号列表
  static getUsers(data: any) {
    return request<any>({
      url: '/getAllUserData/',
      method: 'post',
      data,
    });
  }

  // 新建账号
  static addAccount(data: any) {
    return request<any>({
      url: '/addUserBtn/',
      method: 'post',
      data,
    });
  }

  // 账号密码重置
  static pwdRest(data: any) {
    return request<any>({
      url: '/restPwdBtn/',
      method: 'post',
      data,
    });
  }

  // 角色列表
  static roleList(data: any) {
    return request<any>({
      url: '/getAllRoleData/',
      method: 'post',
      data,
    });
  }

  // 添加角色
  static addRole(data: any) {
    return request<any>({
      url: '/addMenuPriv/',
      method: 'post',
      data,
    });
  }

  // 角色列表
  static getAllPermission(data: any) {
    return request<any>({
      url: '/getAllRoleData2/',
      method: 'post',
      data,
    });
  }

  // 删除角色
  static delRole(data: any) {
    return request<any>({
      url: '/removeMenuPriv/',
      method: 'post',
      data,
    });
  }

  // 修改角色
  static updateRole(data: any) {
    return request<any>({
      url: '/amendMenuPriv/',
      method: 'post',
      data,
    });
  }

  // 获取公司列表
  static getCompanyList(data: any) {
    return request<any>({
      url: '/companyApi/',
      method: 'post',
      data,
    });
  }

  // 修改用户
  static updateUser(data: any) {
    return request<any>({
      url: '/updateUserBtn/',
      method: 'post',
      data,
    });
  }

  // 用户停用
  static userChangeStop(data: any) {
    return request({
      url: '/stopUser/',
      method: 'post',
      data,
    });
  }

  // 用户启用
  static userChangeStart(data: any) {
    return request({
      url: '/startUser/',
      method: 'post',
      data,
    });
  }

  // 用户启用 username
  static passwordForgetByEmail(data: any) {
    return request({
      url: '/passwordForgetByEmail/',
      method: 'post',
      loading: true,
      data,
    });
  }

  // 用户启用 token， newpasswd1，newpasswd2
  static PasswordChangeByEmail(data: any) {
    return request({
      url: '/PasswordChangeByEmail/',
      method: 'post',
      loading: true,
      data,
    });
  }

  // 注册用户 username
  static registerByemail(data: any) {
    return request({
      url: '/registerByemail/',
      method: 'post',
      loading: true,
      data,
    });
  }

  // 注册功能2_注册用户（邮箱跳转到该页面）
  static registerUser(data: RegisterUserParams) {
    return request({
      url: '/registerTest/',
      method: 'post',
      loading: true,
      data,
    });
  }

  // 获取用户账户信息
  static getUserInfo() {
    return request<Promise<UserInfoParams>>({
      url: '/getUserInfo/',
      method: 'post',
      loading: true,
    });
  }
}
