<template>
  <div class="container">
    <AuthorForm />
  </div>
</template>

<script>
import AuthorForm from "./components/AuthorForm.vue";
// import DynamicField from "./components/DynamicField.vue";

export default {
  components: {
    // DynamicField,
    AuthorForm
  },
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
@import "./../node_modules/@vueform/vueform/dist/vueform.css";
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
