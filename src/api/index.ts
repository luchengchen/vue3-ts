import request from "../router/request";

export const userLogin = (params?: any): Promise<ResponseType> =>
  request().get(`/api/opcloud/sys/signIn`, { params: params });
