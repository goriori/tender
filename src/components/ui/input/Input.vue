<script setup lang="ts">
type IProps = {
  type: string,
  placeholder: string
  required?: boolean
}
defineProps<IProps>()
</script>

<template>
  <input :type="type" :placeholder="placeholder" :required="required">
</template>

<style scoped lang="scss">
input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
}
</style>