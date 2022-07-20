<template>
  <label :class="$style.chooseFile">
    <choose-file-icon class="mr-10"/>
    Выберите файл
    <input accept=".csv" type="file" @change="uploadFile" style="display: none">
  </label>
</template>


<script lang="ts">
  import { defineComponent } from "vue"
  import ChooseFileIcon from "./ChooseFileIcon.vue"
  export default defineComponent({
      components: {
        ChooseFileIcon
      },
      setup (_, { emit }) {
        const uploadFile = (event: Event) => {
          emit("uploadFile", event)
        }
        return {
          uploadFile
        }
      }
  })
</script>


<style module>
  .chooseFile {
  border: dashed 1px var(--smed-primary-hover);
  padding: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>