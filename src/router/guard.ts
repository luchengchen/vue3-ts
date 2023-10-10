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
        return router.replace({
          path: `/login`,
        });
      }
    }
  });
}
function checkToken(): boolean {
  return getToken("accessToken");
}
