<template>
    <block class="mt-20">
      <h1 class="smed-text_h4 smed-text_medium text-center">
        <template v-if="!results.length">
          Загрузите результаты лабораторных исследований
        </template>
        <template v-else>
          Вероятные диагнозы
        </template>
      </h1>
      <div v-if="isLoading" class="text-center mt-10">
        <spinner/>
      </div>
      <choose-file v-else-if="!results.length" class="text-center mt-25" @uploadFile='uploadFile' />
      <wrapper v-if="results.length" class="mt-30">
        <card v-for="( result, index ) in results" :key="index" :item="result" @click="showDetailInfo(result)"/>
      </wrapper>
      <error class="mt-10" v-if="isError">Не удалось загрузить данные</error>
      <div v-if="results.length" class="text-center mt-25">
        <base-button @click="restart">Загрузить ещё раз</base-button>
      </div>
    </block>
    <popup v-if="isDetail" :item="detailInfo" @close="closePopup"/>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@smartmed/webpatient-vue-components/BaseButton";
import { Block } from "@/presentation/components/Block"
import { Spinner } from "@/presentation/components/Spinner"
import { Card, Wrapper } from "@/presentation/components/Card"
import { diagnosisService } from "@/services/DiagnosisService"
import { Error } from "@/presentation/components/Error"
import { ChooseFile } from "@/presentation/components/ChooseFile"
import { Popup } from "@/presentation/components/Popup"
import { DiagnosisType } from "@/services/DiagnosisType"


export default defineComponent({
  components: {
    BaseButton,
    Block,
    Spinner,
    Card,
    Error,
    Wrapper,
    ChooseFile,
    Popup
  },
  setup () {
    const isLoading = ref(false)
    const isError = ref(false)
    const results = ref<DiagnosisType[]>([])
    const isDetail = ref(false)
    const detailInfo = ref({})
    const uploadFile=async(event: Event) => {
      isError.value = false
      const target = event.target as HTMLInputElement;
      if (!target || !target.files) return
          const formData = new FormData()
          formData.append("file_in", target.files[0])
      try {
        isLoading.value = true
        const { data } = await diagnosisService.uploadAnalysis(formData)
        console.log(data)
        results.value = data.predict
      } catch(error) {
        isError.value = true
      } finally {
        isLoading.value = false
      }

    }
    const restart = () => {
      results.value = []
    }
    const showDetailInfo = (result: DiagnosisType) => {
      detailInfo.value = { ...result }
      isDetail.value = true
    }
    const closePopup = () => {
      isDetail.value = false
      detailInfo.value = {}
    }
     return {
        uploadFile,
        isLoading,
        isError,
        results,
        restart,
        isDetail,
        detailInfo,
        showDetailInfo,
        closePopup
      }
  }
});
</script>

<style module>
.home {
  color: var(--smed-base-02);
}
</style>
