<template>
  <DynamicFields />
</template>

<script>
import DynamicFields from "./components/DynamicFields.vue";

export default {
  name: "App",
  components: {
    DynamicFields
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
</style>
