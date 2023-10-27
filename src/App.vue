<template>
  <Vueform
    class="form-styling"
    @submit="handleSubmit"
    ref="form$"
    :prepare="prepareSubmit"
  >
    <DynamicField
      v-for="model in models"
      :key="model.name"
      :model="model"
      :form="$refs['form$']"
    />
    <ButtonElement name="submit" add-class="mt-2" submits>
      Submit
    </ButtonElement>
    selected:
    {{ $refs.form$ && $refs.form$.data }}
  </Vueform>
</template>

<script>
import DynamicField from "./components/DynamicField.vue";
import { fetchItemsMixin } from "./mixins/fetchItemsMixin";
import models from "./models/component-model";

export default {
  components: {
    DynamicField
  },
  name: "App",
  mixins: [fetchItemsMixin],
  data() {
    return {
      models: models.getForm()
    };
  },
  methods: {
    handleSubmit() {
      console.log("handleSubmit", this.$refs.form$.data);
    },
    prepareSubmit(value) {
      console.log("prepare submit", value);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form-styling {
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
