import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/css/reset.css";
import router from "./router/index";
import App from "./App.vue";

createApp(App).use(router).use(ElementPlus).mount("#app");
