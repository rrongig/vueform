<template>
  <ElementLayout>
    <template #element>
      <!-- <button @click="editor.chain().focus().toggleBulletList().run()">toggleBulletList</button>
      <button @click="editor.chain().focus().toggleOrderedList().run()">toggleOrderedList</button>
      <button @click="editor.chain().focus().splitListItem('listItem').run()">splitListItem</button>
      <button @click="editor.chain().focus().sinkListItem('listItem').run()">sinkListItem</button>
      <button @click="editor.chain().focus().liftListItem('listItem').run()">liftListItem</button> -->
      <editor-content :editor="editor" v-model="content" ref="editorContent" class="border" />
    </template>
  </ElementLayout>
</template>

<script>
import VueformElement from "@vueform/vueform/element";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

export default VueformElement(
  {
    name: "TipTapElement",
  },
  {
    components: {
      EditorContent,
    },
    data() {
      return {
        content: "",
      };
    },
    setup() {
      const editor = useEditor({
        content: this.content,
        extensions: [StarterKit],
        onUpdate: () => {
          // console.log(editor.getHTML());
          console.log({ content: this.content });
        },
      });

      return { editor };
    },
  }
);
</script>

<style lang="scss"></style>
