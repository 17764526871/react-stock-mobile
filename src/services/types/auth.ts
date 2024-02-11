export interface loginParams {
  username: string;
  userpassword: string;
}

export interface loginResponse {
  UserAccess: string[];
  UserNickName: string;
}

export interface RegisterUserParams {
  username: string;
  token: string;
  vcode: string;
  newpasswd1: string;
  newpasswd2: string;
  userRealName: string;
  userNickName: string;
  roleId: string;
  companyId: string;
}

export interface PasswordChangeParams {
  oldpasswd: string;
  newpasswd1: string;
  newpasswd2: string;
}

export interface PasswordForgotParams {
  token: string;
  newpasswd1: string;
  newpasswd2: string;
}
