import { createApp } from "vue";
import App from "./App.vue";
import JsonViewer from "vue-json-viewer";
import "@vueform/vueform/dist/vueform.css";
import Vueform from "@vueform/vueform";
import vueformConfig from "../vueform.config";

const app = createApp(App);
app.use(Vueform, vueformConfig);
app.use(JsonViewer);
app.mount("#app");
