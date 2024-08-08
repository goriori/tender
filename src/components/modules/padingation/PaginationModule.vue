<script setup lang="ts">

import Pagination from "@/components/ui/pagination/Pagination.vue";
import {useRouter} from "vue-router";
const router = useRouter()

const onPaginate = (page: number) => {
  router.push(`?page=${page}`)
}
</script>

<template>
  <Pagination
      :pages="10"
      @on-paginate="onPaginate"/>
</template>

<style scoped lang="scss">

</style>