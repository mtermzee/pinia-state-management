import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(store).use(router).use(pinia).mount("#app");
