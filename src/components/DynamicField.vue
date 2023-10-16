<template>
  <component
    :is="dynamicComponent"
    v-bind="model"
    :items="fetchData"
    @change="onChange"
    :disabled="disableField()"
  />
</template>

<script>
import { fetchItemsMixin } from "../mixins/fetchItemsMixin";

export default {
  props: ["model", "form"],
  mixins: [fetchItemsMixin],
  computed: {
    dynamicComponent() {
      return this.model.type;
    }
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
    fetchData(searchQuery) {
      return this.fetchItems(searchQuery, this.model.name);
    },
    disableField() {
      return (
        this.model.disabledBy &&
        this.form &&
        this.form.data[this.model.disabledBy] == null
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
