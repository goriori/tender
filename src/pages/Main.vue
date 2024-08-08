<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
import {TenderService} from "@/services/tender";
import {useTenderStore} from "@/store/tender.store.ts";
import {useApplicationStore} from "@/store/application.store.ts";
import List from "@/components/ui/list/List.vue";
import MainLoader from "@/components/ui/loaders/MainLoader.vue";
import PaginationModule from "@/components/modules/padingation/PaginationModule.vue";
import SearchTenderModule from "@/components/modules/search-tender/SearchTenderModule.vue";

const route = useRoute()
const applicationStore = useApplicationStore()
const tenderStore = useTenderStore()
const isLoading = computed(() => applicationStore.getStateLoading())
const tenders = computed(() => tenderStore.getTenderSearchList())
const tendersIsNotNull = computed(() => tenders.value.length > 0)

onMounted(async () => {
  applicationStore.setStateLoading(true)
  const page = Number(route.query.page)
  const list = await TenderService.getList(page || 1, 30)
  tenderStore.setTenders(list)
  tenderStore.setTenderSearchList(tenderStore.getTenders())
  applicationStore.setStateLoading(false)
})

</script>
<template>
  <div class="page container">
    <Transition name="fade">
      <MainLoader v-if="isLoading" class="page-loader"/>
    </Transition>
    <Transition name="fade">
      <div class="page-search" v-if="!isLoading">
        <SearchTenderModule/>
      </div>
    </Transition>
    <Transition name="fade">
      <div class="page-list" v-if="!isLoading">
        <List v-if=" tendersIsNotNull" :column="5" :list="tenders" class="list"/>
        <p v-else class="list-empty">Ничего не найдено</p>
      </div>
    </Transition>
    <Transition name="fade">
      <div class="page-pagination" v-if="!isLoading">
        <PaginationModule
            v-if="tendersIsNotNull "
            class="page-pagination"
        />
      </div>
    </Transition>
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

  &-search {
    flex: 1 0 5vh;
  }

  &-list {
    flex: 1 0 80vh;
  }

  &-pagination {
    flex: 1 0 10vh;
  }
}


.list {
  &-empty {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
