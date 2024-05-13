import en from "@vueform/vueform/locales/en";
import vueform from "@vueform/vueform/themes/vueform";
import TipTapElement from "@/components/TipTapElement.vue";
import RatingElement from "@/components/RatingElement.vue";
import "@vueform/vueform/themes/vueform/css/index.min.css";

export default {
  theme: vueform,
  locales: { en },
  locale: "en",
  elements: [TipTapElement, RatingElement]
};
