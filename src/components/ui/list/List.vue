<script setup lang="ts">
import TenderCard from "@/components/ui/card/tender-card/TenderCard.vue";
import {TenderItem} from "@/services/tender";

type LProps = {
  list: TenderItem[],
  column: number | string
}
defineProps<LProps>()
</script>

<template>
  <section class="list">
    <TenderCard
        v-for="item in list" :key="item.id"
        :title="item.title"
        :date="item.date"
        :deadline_date="item.deadline_date"
        :description="item.description"
        :category="item.category"
        :awarded_value="item.awarded_value"
        :awarded_currency="item.awarded_currency"
        :awarded_value_eur="item.awarded_value_eur"
    />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.list {
  width: 100%;
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