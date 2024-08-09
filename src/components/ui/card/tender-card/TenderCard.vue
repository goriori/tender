<script setup lang="ts">

import Card from "@/components/ui/card/Card.vue";

type CProps = {
  title: string
  category: string
  date: string
  deadline_date: string
  awarded_value: string
  awarded_currency: string
  awarded_value_eur: string
}
defineProps<CProps>()
</script>

<template>
  <Card>
    <template #head>
      <h3 class="title">{{ title }}</h3>
      <span class="category">{{ category }}</span>
    </template>
    <template #center>
      <div class="price">
        <div class="price-currency">
          {{ awarded_value }} | <span class="currency">{{ awarded_currency }}</span>
        </div>
        <div class="price-eur">
          {{ awarded_value_eur }} | <span class="currency">EUR</span>
        </div>
      </div>
    </template>
    <template #footer>
      <span class="date">{{ date }}</span>
      <span class="deadline">{{ deadline_date }}</span>
    </template>
  </Card>
</template>

<style scoped lang="scss">

@import '@/assets/scss/mixins';


@mixin between-display() {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

::v-deep(.card-head) {
  @include between-display();
}

::v-deep(.card-center) {
  @include between-display();
}

::v-deep(.card-footer) {
  @include between-display();
}

.title, .date, .deadline {
  line-height: normal;
  font-size: 12px;
}

.deadline {
  @include chip(var(--secondary-color));
}

.category {
  @include chip(var(--primary-color));
  font-size: 10px;
}

.price {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  .currency {
    font-weight: bold;
  }
}

.icon {
  display: flex;
  justify-content: center;
  max-width: 50px;
  max-height: 50px;
}
</style>