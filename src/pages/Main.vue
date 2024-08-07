<script setup lang="ts">
import {onMounted} from "vue";
import {TenderService} from "@/services/tender";
import {tenderStore} from "@/store/tender.store.ts";
import List from "@/components/ui/list/List.vue";

onMounted(async () => {
  const list = await TenderService.getList(1)
  list.forEach(tender => tenderStore.addTender(tender))
  console.log(tenderStore.getTenders())
})
</script>
<template>
  <div class="page container">
    <List :column="5" :list="tenderStore.getTenders()"/>
  </div>
</template>

<style scoped></style>
