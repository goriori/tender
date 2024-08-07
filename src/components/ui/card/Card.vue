<script setup lang="ts">

</script>

<template>
  <article class="card">
    <section class="card-head">
      <slot name="head"/>
    </section>
    <section class="card-center">
      <slot name="center"/>
    </section>
    <section class="card-footer">
      <slot name="footer"/>
    </section>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/scss/animation';

.card {
  width: 100%;
  height: 100%;
  max-height: 200px;
  border-radius: 10px;
  background: #eae8e8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: display-card 0.3s linear;
  transition: 0.3s all ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
}
</style>