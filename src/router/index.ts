import { createRouter, createWebHashHistory } from "vue-router";

// 默认路由
const routes = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Login/Index.vue"),
  },
  {
    name: "403",
    path: "/403",
    component: () => import("@/views/Default/403.vue"),
  },
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/views/Home/Index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
