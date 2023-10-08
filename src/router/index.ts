import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routerGuard } from "./guard";
// 2.配置路由列表
const routes: Array<RouteRecordRaw> = [
  {
    name: "error",
    path: "/error",
    meta: {
      title: "错误页面",
      hidden: false,
      icon: "Promotion",
    },
    component: () => import("@/views/Default/ErrorIndex.vue"),
  },
  {
    name: "login",
    path: "/login",
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "Promotion", //菜单文字左侧的图标,支持element-plus全部图标
    },
    component: () => import("@/views/Login/LoginIndex.vue"),
  },
  {
    name: "home",
    path: "/home",
    meta: {
      title: "首页",
      hidden: false,
      icon: "Promotion",
    },
    component: () => import("@/views/Home/HomeIndex.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
];
//1.返回router实例，为函数，里面有配置项对象（history）
const router = createRouter({
  history: createWebHistory(),
  routes,
});

routerGuard(router);
// 3.导出路由
export default router;
