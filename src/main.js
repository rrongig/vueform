import { createApp } from "vue";
import App from "./App.vue";
import JsonViewer from "vue-json-viewer";
import Vueform from "@vueform/vueform/plugin";
import vueformConfig from "../vueform.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.use(Vueform, vueformConfig);
app.use(JsonViewer);
app.mount("#app");
