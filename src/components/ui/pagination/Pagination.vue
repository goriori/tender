<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";

type PProps = {
  pages: number
}
type PEmits = {
  (eventName: 'onPaginate', page: number): void
}
defineProps<PProps>()
const emits = defineEmits<PEmits>()
const onPaginate = (page: number) => {
  emits('onPaginate', page)
}
</script>

<template>
  <div class="pagination">
    <Button
        v-for="page in pages"
        :key="page"
        :title="page"
        @click="onPaginate(page)"
    />
  </div>
</template>

<style scoped>
@import "@/assets/scss/animation.scss";

.pagination {
  border: 1px solid #398ec4;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 10px;
  animation: display-card 0.3s linear;
}
</style>