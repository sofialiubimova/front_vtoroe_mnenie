<template>
  <div :class="$style.block">
    <slot/>
  </div>
</template>


<style module>
  .block {
    background: white;
    border-radius: 10px;
    padding: 20px;
  }
</style>