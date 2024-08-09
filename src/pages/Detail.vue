<script setup lang="ts">

import {useTenderStore} from "@/store/tender.store.ts";
import {computed, onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {TenderService} from "@/services/tender";
import Button from "@/components/ui/button/Button.vue";
import NoticeCard from "@/components/ui/card/notice-card/NoticeCard.vue";

const router = useRouter()
const route = useRoute()
const tenderStore = useTenderStore()
const targetTender = computed(() => tenderStore.getTargetTender())
const targetTenderIsEmpty = computed(() => Object.keys(targetTender.value).length === 0)
const checkTargetTender = async () => {
  const tenderId = String(route.params.id)
  if (targetTenderIsEmpty.value) {
    tenderStore.setTargetTender(await TenderService.getTenderDetails(tenderId))
  }
}

const redirectToDocument = (documentLink: string) => {
  const a = document.createElement('a')
  a.href = documentLink
  a.target = '_link'
  a.click()
  a.remove()
}
onMounted(async () => {
  await checkTargetTender()
})

</script>

<template>
  <div class="page container">
    <Button title="Назад" color="primary" @click="router.back()"/>
    <section class="page-top" v-if="!targetTenderIsEmpty">
      <div class="tender-preview">
        <img src="https://i.pinimg.com/originals/af/1a/7b/af1a7b919a5b5934d1b6d1d3e8130de1.jpg"/>
      </div>
      <div class="tender-info">
        <div class="info-head">
          <h1><strong class="title">{{ targetTender.title }}</strong></h1>
          <span class="category">{{ targetTender.category }}</span>
        </div>
        <div class="info-awarded">
          <div class="awarded-currency">
            {{ targetTender.awarded_value }} | <span class="currency">{{ targetTender.awarded_currency }}</span>
          </div>
          <div class="awarded-eur">
            {{ targetTender.awarded_value_eur }} | <span class="currency">EUR</span>
          </div>
        </div>
        <p class="info-description">
          {{ targetTender.description }}
        </p>
        <div class="info-footer">
          <span class="date">{{ targetTender.date }}</span>
          <span class="deadline">{{ targetTender.deadline_date }}</span>
        </div>
      </div>
    </section>
    <h2>История</h2>
    <section class="page-notice">
      <div v-for="notice in targetTender.notices" class="notice-block">
        <NoticeCard
            v-for="item in notice"
            :title="item.name"
            class="notice"
            @click="redirectToDocument(item.doc_url)"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins';

.page {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &-top {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    gap: 50px;
  }

  &-notice {
    max-width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    gap: 10px;
    @include no-scroll();
    .notice-block {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      gap: 10px;
      flex: 1 0 250px;
      .notice {
        flex: 1 0 250px
      }
    }
  }
}

.tender {
  &-preview {
    width: 100%;
    height: 100%;
    max-width: 500px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}

.info {
  &-head, &-awarded, &-footer {
    flex: 1;
  }

  &-head, &-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-awarded {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 30px;
  }

  &-description {
    line-height: normal;
    font-size: 17px;
    max-height: 300px;
    overflow-y: auto;
  }
}

.title {
  font-size: 30px;
}

.category {
  @include chip(var(--primary-color));
  font-size: 13px;
}

.currency {
  font-weight: bold;
}

.deadline {
  @include chip(var(--secondary-color));
}
</style>