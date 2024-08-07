<script setup lang="ts">
import {computed, onMounted} from "vue";
import {TenderService} from "@/services/tender";
import {useTenderStore} from "@/store/tender.store.ts";
import List from "@/components/ui/list/List.vue";
import Pagination from "@/components/ui/pagination/Pagination.vue";
import {useApplicationStore} from "@/store/application.store.ts";
import {useRoute, useRouter} from "vue-router";
import MainLoader from "@/components/ui/loaders/MainLoader.vue";

const router = useRouter()
const route = useRoute()
const applicationStore = useApplicationStore()
const tenderStore = useTenderStore()
const isLoading = computed(() => applicationStore.getStateLoading())
const tenders = computed(() => tenderStore.getTenders())

const onPaginate = (page) => {
  router.push(`?page=${page}`)
}

onMounted(async () => {
  applicationStore.setStateLoading(true)
  const page = Number(route.query.page)
  const list = await TenderService.getList(page || 1, 30)
  tenderStore.setTenders(list)
  applicationStore.setStateLoading(false)
})

</script>
<template>
  <div class="page container">
    <TransitionGroup name="fade">
      <MainLoader v-if="isLoading" class="page-loader"/>
      <List v-if="!isLoading" :column="5" :list="tenders"/>
      <Pagination
          v-if="tenders.length > 0 && !isLoading"
          class="page-pagination"
          :pages="10"
          @on-paginate="onPaginate"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins';

.page {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &-loader {
    @include position-center-absolute();
  }

  &-pagination {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

}
</style>
