import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 2.配置路由列表
const routes: Array<RouteRecordRaw> = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Login/LoginIndex.vue"),
  },
  {
    name: "error",
    path: "/error",
    component: () => import("@/views/Default/ErrorIndex.vue"),
  },
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/views/Home/HomeIndex.vue"),
    children: [
 
    ],
  },
];
//1.返回router实例，为函数，里面有配置项对象（history）
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 3.导出路由
export default router;
