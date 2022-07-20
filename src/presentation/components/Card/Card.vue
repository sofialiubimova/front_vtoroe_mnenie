<template>
      <island
            :title="item.title"
            :class="$style.island"
          >
      <template v-slot:footer>
          <div :class="$style.value"> {{ item.value }}% </div>
      </template>
      </island>
</template>


<script lang="ts">
import Island from "@smartmed/webpatient-vue-components/Island";
import { defineComponent, PropType } from "vue"
export default defineComponent({
      components: {
        Island
      },
      props: {
        item: {
          type: Object as PropType <{title: string, value: number}>,
          required: true
        }
      }
  }
)
</script>


<style module>
  .island {
  max-width: 380px;
  border: solid 1px var(--smed-primary-hover);
  min-width: 200px;
}
  .value {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
</style>