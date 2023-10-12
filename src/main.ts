import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import "./assets/css/reset.css";
import router from "./router/index";
import App from "./App.vue";

const pinia = createPinia();
createApp(App).use(router).use(ElementPlus).use(pinia).mount("#app");
