<template>
  <Vueform :schema="schema" ref="form$"></Vueform>
  <div v-if="form$"><json-viewer :value="form$.data" :expand-depth="2" /></div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import models from "@/models/component-model";

export default {
  setup() {
    const form$ = ref(null);
    onMounted(async () => {
      const data = (await axios.get("http://core.local.com/v0.1/sites/authors/65")).data.result[0];
      form$.value.load(data);
    });
    return { form$, schema: models.schema };
  },
};
</script>
