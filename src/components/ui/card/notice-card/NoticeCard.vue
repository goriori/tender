<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";

type NProps = {
  title: string
}
defineProps<NProps>()
</script>

<template>
  <Card>
    <template #center>
      <div class="content">
          <strong>{{ title }}</strong>
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  gap: 20px;
  align-items: center;
}

</style>