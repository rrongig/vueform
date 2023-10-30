<template>
  <ElementLayout>
    <template #element>
      <input v-for="(field, index) in ratingFields" :key="index" type="number" />
    </template>
  </ElementLayout>
</template>

<script>
import VueformElement from "@vueform/vueform/element";
import { ref } from "vue";

export default VueformElement(
  {
    name: "RatingElement",
  },
  {
    components: {},
    setup(props, { element }) {
      console.log(element);
      const firstRating = ref(1);
      const secondRating = ref(2);
      const thirdRating = ref(2);
      return {
        ratingFields: [firstRating, secondRating, thirdRating],
      };
    },
  }
);
</script>

<style lang="scss"></style>
