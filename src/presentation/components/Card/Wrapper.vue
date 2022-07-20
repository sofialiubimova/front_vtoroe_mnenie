<template>
  <div :class="$style.wrapper">
    <slot/>
  </div>
</template>


<style module>
  .wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>