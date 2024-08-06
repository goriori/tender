<script setup lang="ts">
import {onMounted} from "vue";
import {TenderService} from "@/services/tender";

onMounted(async () => {
  const list = await TenderService.getList(1)
  console.log(list)
})
</script>
<template>
  <div class="page container">
  </div>
</template>

<style scoped></style>
