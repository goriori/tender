<script setup lang="ts">

import List from "@/components/ui/list/List.vue";
import TenderCard from "@/components/ui/card/tender-card/TenderCard.vue";
import {useTenderStore} from "@/store/tender.store.ts";
import {computed} from "vue";
import {TenderListItem, TenderService} from "@/services/tender";
import {useRouter} from "vue-router";

const router = useRouter()
const tenderStore = useTenderStore()
const tenders = computed(() => tenderStore.getTenderSearchList())
const onTargetTender = async (tender: TenderListItem) => {
  tenderStore.setTargetTender(await TenderService.getTenderDetails(tender.id))
  await router.push(`/tender/${tender.id}`)
}
</script>

<template>
  <List
      :column="5"
      :list="tenders"
      :card="TenderCard"
      @on-target="onTargetTender"
  />
</template>

<style scoped lang="scss">

</style>