<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default defineComponent({
  setup () {
    const route = useRoute()
    const layout = computed(() => route.meta.layout || 'div')
    return {
      layout
    }
  }
});
</script>
