import { ElMessage } from "element-plus";
/**
 * 获取用户token
 */
export function getToken(key: string): any | null {
  const session = localStorage.getItem(key);
  if (!session) {
    return undefined;
  }
  const data = JSON.parse(session);
  if (data !== null) {
    if (data.expirse != null && data.expirse < new Date().getTime()) {
      localStorage.removeItem(key);
    } else {
      return data.value;
    }
  }
  return null;
}

/**
 * 设置用户token,有效期两小时
 * @param {*} value
 */
export function setToken(key: string, value: any, expires: number): void {
  const data = { value: value, expirse: new Date().getTime() + expires * 1000 };
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * 移除token
 */
export function removeToken() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export function setStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key: string): any {
  console.log(11, "token");
  const session = localStorage.getItem(key);
  if (session) {
    return JSON.parse(session || "");
  }
  return session;
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

/**
 * 消息提示
 * @export
 * @param type 类型
 * @param message 消息
 * @param html 是否为html
 * @param duration 消失时间
 * @param grouping 合并内容相同的消息
 */
export function messageAlert(
  type: "success" | "warning" | "error",
  message: string = "",
  html: boolean = false,
  duration: number = 3000,
  grouping: boolean = false,
) {
  ElMessage({
    showClose: false,
    message: message,
    type: type,
    duration,
    dangerouslyUseHTMLString: html,
    customClass: "tip-message",
    grouping: grouping,
  });
}
