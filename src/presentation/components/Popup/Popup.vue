<template>
  <div :class="$style.overlay">
    <div :class="$style.popup">
      <div :class="$style.close">
        <popup-icon @click="$emit('close')"/>
      </div>
      <h2 class="smed-text_h5 smed-text_bold">{{ item.title }}</h2>
      <p class="mt-10">На основе отклонений: {{ pathologies }}</p>
      <div :class="[$style.percent, 'mt-30']"> {{ item.value }}%</div>
    </div>
  </div>
</template>


<script lang="ts">
  import { defineComponent, ref, PropType, toRefs } from "vue";
  import { DiagnosisType } from "@/services/DiagnosisType";
  import PopupIcon from "./PopupIcon.vue";

  export default defineComponent({
      components: {
        PopupIcon
      },
      props: {
        item: {
          type: Object as PropType<DiagnosisType>,
          required: true
        }
      },
      setup (props) {
        const { item } = toRefs(props)
        const pathologies = item.value.pathologies.join(', ')
        return {
          pathologies
        }
      }
  }
  )
</script>


<style module>
  .popup {
    background: white;
    border-radius: 20px;
    padding: 15px 30px 30px 30px;
    width: 350px;
    position: relative;
  }
  .overlay {
    background: #00b2ac75;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  }
  .percent {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }
  .close {
    text-align: right;
    margin-right: -10px;
    cursor: pointer;
  }
</style>