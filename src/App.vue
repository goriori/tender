<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <transition  name="fade" mode="out-in">
        <suspense>
          <component :is="Component" :key="route.fullPath"></component>
        </suspense>
      </transition>
    </template>
  </RouterView>
</template>

<style scoped>
</style>
