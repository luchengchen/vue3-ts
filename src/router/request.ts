import axios, { AxiosResponse } from "axios";
import { getToken, messageAlert, removeToken } from "../utils/utils";
import router from "../router";
function request(option?: RequestOptions) {
  const baseURL = "/v2";
  const service = axios.create({
    responseType: option?.responseType,
    baseURL: baseURL,
    timeout: 50000,
  });
  // 请求拦截器
  service.interceptors.request.use(
    function (config) {
      //在发送请求之前做些什么，例如请求头上加入token
      const token = getToken("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      // 对请求错误的时候做些什么
      return Promise.reject(error);
    },
  );

  // 响应拦截器
  service.interceptors.response.use(
    function (response: AxiosResponse) {
      //在接收响应时做些什么，例如token失效跳转到登录页
      return response;
    },
    function (error) {
      let errmsg = "";
      if (!error.response) {
        if (/[timeout of]\s+\d+ms\s+[exceeded]/.test(error.message)) {
          errmsg = "请求超时，请检查网络";
        }
      } else {
        errmsg = responseStatus(error.response);
      }
      errmsg && messageAlert("error", errmsg, false, 2500, true);
      return Promise.reject(errmsg);
      // 对响应错误的时候做些什么
    },
  );
  return service;
}
/**http状态码异常 */
function responseStatus(response: AxiosResponse): string {
  const status = response.status;
  let message: string = "";
  switch (status) {
    case 404:
      message = "数据接口异常";
      break;
    case 401:
      message = userInvalid(response);
      break;
    case 403:
      return "没有权限，请联系管理员";
    case 400:
      message = response.data?.msg || "参数错误";
      break;
    case 500:
      message = response.data?.msg || "服务异常,请重试";
      break;
    case 200:
      message = responseSuccess(response);
      break;
  }
  return message;
}
/**
 * 用户失效
 */
function userInvalid(response: AxiosResponse): string {
  removeToken();
  console.log(response, "response");
  const currentPath = router.currentRoute.value.fullPath;
  if (!unCheckPaths.some((path) => currentPath.includes(path))) {
    router.replace({
      path: `/login`,
    });
    return "登录信息已失效，请重新登录";
  }
}
// 请求白名单 绕过token检查
const unCheckPaths: string[] = ["/login"];
/**
 * 响应成功code异常
 */
function responseSuccess(response: AxiosResponse): string {
  const { code, msg } = response.data;
  switch (code) {
    case 401:
      return userInvalid(response);
    case 403:
      return "没有权限，请联系管理员";
    case 500:
      return msg || "服务异常";
    case -1:
      return msg || "服务异常";
    case 200:
      return "";
    case 203:
      return msg || "服务异常";
    default:
      return "";
  }
}

export default request;
