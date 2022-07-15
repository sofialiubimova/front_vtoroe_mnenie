<template>
  <container>
    <slot />
  </container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Container } from "@/presentation/components/Container";

export default defineComponent({
  components: {
    Container,
  },
});
</script>
