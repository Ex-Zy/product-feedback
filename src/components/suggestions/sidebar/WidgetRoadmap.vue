<script setup lang="ts">
import { useFeedbackStatuses } from '@/stores/feedbackStatuses'
import { computed } from 'vue'
import type { IFeedbackStatus } from '@/types'
import { storeToRefs } from 'pinia'

const { feedbackStatuses } = storeToRefs(useFeedbackStatuses())
const statuses = computed<IFeedbackStatus[]>(() =>
  feedbackStatuses.value.filter(({ status }) => status !== 'suggestion')
)
</script>

<template>
  <div class="widget-roadmap">
    <div class="widget-roadmap__top">
      <h3 class="widget-roadmap__title h3">Roadmap</h3>
      <RouterLink class="widget-roadmap__link link" to="/">View</RouterLink>
    </div>
    <ul class="feedback-statuses">
      <li class="feedback-statuses__item" v-for="item in statuses" :key="item.status">
        <span class="feedback-statuses__icon" :style="{ background: item.color }"></span>
        <div class="feedback-statuses__label b1">{{ item.label }}</div>
        <div class="feedback-statuses__amount b1">{{ item.amount }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.widget-roadmap {
  border-radius: var(--radius-1);
  background: var(--color-4);
  padding: var(--widget-padding);
  min-height: 178px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__link {
  }
}

.feedback-statuses {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__icon {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  &__item {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__amount {
    margin-left: auto;
    font-weight: bold;
  }
}
</style>
