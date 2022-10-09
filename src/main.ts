import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas,fab)

const pinia = createPinia();

createApp(App).use(router).use(pinia).component('fa',FontAwesomeIcon).mount("#app");
