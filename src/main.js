import { createApp } from "vue";
import App from "./App.vue";
import Vueform from "@vueform/vueform/plugin";
import vueformConfig from "../vueform.config";
// import Builder from "@vueform/builder";
// import builderConfig from "./../../builder.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.use(Vueform, vueformConfig);
// app.use(Builder, builderConfig);
app.mount("#app");
