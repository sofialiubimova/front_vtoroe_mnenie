<template>
  <div :class="$style.home">
    Home
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup () {
  }
});
</script>

<style module>
.home {
  color: var(--smed-base-02);
}
</style>
