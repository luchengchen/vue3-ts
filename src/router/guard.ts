import type { RouteLocationNormalized, Router } from "vue-router";
import { getToken, removeToken, messageAlert } from "@/utils/utils";

const unCheckPaths: string[] = ["/login"];

export function routerGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, from) => {
    console.log(to, "to", from);
    //验证用户登录状态
    if (!unCheckPaths.includes(to.path)) {
      const hasToken = checkToken();
      if (!hasToken) {
        console.log(hasToken, "hasToken");
        hasToken == null && messageAlert("error", "登录失效，请重新登录");
        removeToken();
        // 不执行当前跳转操作
        //  const redirect: string | undefined =
        //  to.fullPath === "/login" ? undefined : to.fullPath;
        return router.replace({
          path: `/login`,
          // query: {
          //     redirect: (redirect && redirect)?.split("?")[0],
          //   }
        });
      }
    }
  });
}
function checkToken(): boolean {
  return getToken("accessToken");
}
