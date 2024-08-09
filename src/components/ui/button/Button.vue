<script setup lang="ts">

type BProps = {
  title: string | number
  color: 'primary' | 'secondary'
}
defineProps<BProps>()
</script>

<template>
  <button :class="[color]">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: transparent;
}

.primary {
  background: var(--primary-color);
}

.secondary {
  background: var(--secondary-color);
}
</style>