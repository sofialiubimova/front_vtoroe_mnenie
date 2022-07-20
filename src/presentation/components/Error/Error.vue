<template>
  <div :class="$style.error">
    <error-icon class="mr-10"/>
    <slot/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import ErrorIcon from "./ErrorIcon.vue"

  export default defineComponent({
      components: {
        ErrorIcon
      }
     }
    )
</script>


<style module>
  .error {
    background: var(--smed-error);
    color: var(--smed-base-09);
    padding: 15px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
</style>