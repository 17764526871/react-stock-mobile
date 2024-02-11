import { useRequest } from './useRequset';

export const { instance, request } = useRequest({
  baseURL: '/api',
});
