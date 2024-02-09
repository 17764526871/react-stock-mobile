import { notification } from 'antd';
import { AxiosError } from 'axios';
import { instance } from 'intellistock-apis';
import { AuthActions } from '@/actions';

export const registerApiInterceptors = () => {
  instance.interceptors.response.use(
    (response) => {
      if (!response.data.errorFlag) {
        notification.error({
          message: '系统异常',
          description: response.data.errorMsg,
        });

        if (response.data.errorCode === '-200') {
          AuthActions.logout();
        }

        return Promise.reject('系统异常');
      }
      return response;
    },
    (error: AxiosError) => {
      notification.error({
        message: '网络异常',
        description: error.message,
      });

      return Promise.reject('网络异常');
    },
  );
};
