<script setup lang="ts">

type BProps = {
  title: string | number
}
defineProps<BProps>()
</script>

<template>
  <button>
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: #ee816e;
}
</style>