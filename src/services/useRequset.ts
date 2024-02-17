import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestConfig extends AxiosRequestConfig {
  /** 默认false,接口出错时，框架会自动弹出提示；该选项设置为true后，框架将不再弹出提示，由业务自行处理错误消息
   * (注意： axios 0.19.0 的版本有bug,自定义配置将不会生效)
   */
  silence?: boolean;
  /**
   * 请求时是否显示加载器,默认false
   */
  loading?: boolean;
}

/** 请求器能力初始化 */
export const useRequest = (baseConfig?: RequestConfig) => {
  const instance = axios.create(baseConfig);
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      config.withCredentials = true;
      return config;
    },
    (error) =>
      // 对请求错误做些什么
      Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) =>
      // 对响应数据做些什么
      response,
    (error) =>
      // 对响应错误做些什么
      Promise.reject(error),
  );

  type RequestType = {
    <T>(config: RequestConfig, responseModel?: 'data'): Promise<T>;
    <T>(config: RequestConfig, responseModel: 'all'): Promise<AxiosResponse<T>>;
  };

  const request: RequestType = async (config, responseModel) => {
    const response = await instance(config);
    switch (responseModel) {
      case 'all':
        return response;
      case 'data':
        return response?.data.errorCode ? response?.data.data : response?.data;
      default:
        return response?.data.errorCode ? response?.data.data : response?.data;
    }
  };

  return {
    instance,
    request,
  };
};
