export interface ISignIn {
  username: string;
  userpassword: string;
}

export interface UserInfoParams {
  UserInfo: {
    UserName: string;
    Level: string;
    UserNickName: string;
    CompanyName: string;
    ReNewalDate: string;
    ExpirationDate: string;
  };
}
