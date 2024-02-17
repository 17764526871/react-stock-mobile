import Mock from 'mockjs';
import { loginData } from '../data/auth';

// Mock登录接口
Mock.mock('/api/login/', 'post', () =>
  // 假设登录逻辑
  ({
    ...loginData,
  }),
);

// Mock注册接口
Mock.mock('/api/register', 'post', () => {
  // const { username, password } = JSON.parse(req.body);
  // 假设注册逻辑
  // 返回成功或失败信息
});

// Mock退出登录接口
Mock.mock('/api/logout', 'post', () => {
  // 假设退出登录逻辑
  // 返回成功或失败信息
});

export default Mock;
