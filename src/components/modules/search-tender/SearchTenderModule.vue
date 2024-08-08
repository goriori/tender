<script setup lang="ts">

import Input from "@/components/ui/input/Input.vue";
import {useTenderStore} from "@/store/tender.store.ts";
import {TenderItem} from "@/services/tender";
import {searchTenderByTitle} from "@/utils/helpers/searchTenderByTitle.ts";

const tenderStore = useTenderStore()
const onSearchTender = (event: Event) => {
  const searchValue = (event.target as HTMLInputElement).value
  const tenderList: TenderItem[] = JSON.parse(JSON.stringify(tenderStore.getTenders()))
  const searchedList = searchTenderByTitle(tenderList, searchValue)
  if (searchedList) tenderStore.setTenderSearchList(searchedList as TenderItem[])
}
</script>

<template>
  <section class="module">
    <form @submit.prevent>
      <Input type="search" placeholder="Поиск" @input="onSearchTender"/>
    </form>
  </section>
</template>

<style scoped lang="scss">

</style>