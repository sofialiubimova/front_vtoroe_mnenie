<template>
  <header :class="$style.header">
    <container :class="$style.container">
      <img :src="Logo" />
    </container>
  </header>
  <container :class="$style.contentWrapper">
    <slot />
  </container>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import { Container } from "@/presentation/components/Container";
import Logo from "./assets/logo.svg";
export default defineComponent({
  components: {
    Container,
  },
  setup() {
    return {
      Logo,
    };
  },
});
</script>

<style module>
.header {
  background: #fff;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
}

.contentWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
