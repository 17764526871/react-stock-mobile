import Mock from 'mockjs';

// Mock登录接口
Mock.mock('/api/login', 'post', (req) => {
  const { username, password } = JSON.parse(req.body);
  // 假设登录逻辑
  if (username === 'admin' && password === 'password') {
    return {
      code: 200,
      message: '登录成功',
      token: 'your-auth-token',
    };
  } else {
    return {
      code: 401,
      message: '用户名或密码错误',
    };
  }
});

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
