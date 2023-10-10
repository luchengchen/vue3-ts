import request from "../router/request";

export interface ApiResult<T> {
  code: number;
  message: string;
  data: T;
}
export const userLogin = (params?: any): Promise<ApiResult<T>> =>
  request().get(`/api/opcloud/sys/signIn`, { params: params });
