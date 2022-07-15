<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  // overflow: hidden;
}
</style>
