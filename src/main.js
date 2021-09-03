import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

createApp(App).use(router).use(VueToast).mount("#app");
