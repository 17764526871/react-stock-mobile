import { useState } from 'react';
import { Button, Input, Form } from 'react-vant';
import styles from './index.module.less';
import src from '@/assets/img/logo.png';
import { ClosedEye, EyeO } from '@react-vant/icons';
import { AuthApis } from '@/services';
import { setAuth, setMenu } from '@/stores';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';
  const [form] = Form.useForm();
  const navigator = useNavigate();
  const [passwordVisiable, setPasswordVisiable] = useState(false);

  const onFinish = async (values) => {
    const res = await AuthApis.login({
      username: values.username,
      userpassword: values.password,
    });
    setAuth({ userInfo: res.sessionid });
    setMenu((old) => ({ ...old, activeMenu: from }));
    navigator(from);
  };

  const handleShowPassword = () => {
    setPasswordVisiable(!passwordVisiable);
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_logo_img}>
        <img src={src} alt="" />
      </div>
      <div className={styles.login_text}>INTELLI STOCK</div>
      <div className={styles.login_form}>
        <Form
          form={form}
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.Item
            tooltip={{
              message: '请使用邮箱注册',
            }}
            intro="确保这是唯一的用户名"
            rules={[{ required: true, message: '请填写用户名' }]}
            name="username"
            label="用户名"
          >
            <Input placeholder="请输入用户名" clearable clearTrigger="always" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写密码' }]}
            name="password"
            label="密码"
          >
            <Input
              placeholder="请输入密码"
              type={passwordVisiable ? 'text' : 'password'}
              suffix={
                <div onClick={handleShowPassword}>
                  {passwordVisiable ? <EyeO /> : <ClosedEye />}
                </div>
              }
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
