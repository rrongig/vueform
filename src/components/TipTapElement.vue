<template>
  <ElementLayout>
    <template #element>
      <h2>TipTap hello Rron</h2>
      <TestingComponents />
    </template>
  </ElementLayout>
</template>

<script>
import VueformElement from "@vueform/vueform/element";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TestingComponents from "./TestingComponents.vue";

export default VueformElement(
  {
    name: "TipTapElement",
    components: {
      EditorContent,
      TestingComponents,
    },
  },
  {
    setup() {
      const editor = useEditor({
        content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
        extensions: [StarterKit],
      });

      return { editor };
    },
  }
);
</script>

<style lang="scss"></style>
