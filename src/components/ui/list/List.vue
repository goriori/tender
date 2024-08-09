<script setup lang="ts">
import {TenderListItem} from "@/services/tender";
import {DefineComponent} from "vue";

type LProps = {
  list: TenderListItem[],
  column: number | string
  card: DefineComponent
}
type LEmits = {
  (eventName: 'onTarget', item: TenderListItem): void
}
defineProps<LProps>()
const emits = defineEmits<LEmits>()
const onTargetTender = (tender: TenderListItem) => {
  emits('onTarget', tender)
}
</script>

<template>
  <section class="list">
    <component
        :is="card"
        v-for="item in list" :key="item.id"
        v-bind="item"
        @click="onTargetTender(item)"
    />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.list {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind(column), 1fr);
  gap: 20px;
  @media (max-width: $md2 + px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: $md4 + px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: $md5 + px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>