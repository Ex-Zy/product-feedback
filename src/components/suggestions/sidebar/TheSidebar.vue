<script setup lang="ts">
import WidgetCategories from '@/components/suggestions/sidebar/WidgetCategories.vue'
import WidgetFeedbackBoard from '@/components/suggestions/sidebar/WidgetFeedbackBoard.vue'
import WidgetRoadmap from '@/components/suggestions/sidebar/WidgetRoadmap.vue'
import { useSuggestionsStore } from '@/stores/suggestions'

const { setFilter } = useSuggestionsStore()

function handleFilterCategory(categoryName: string) {
  setFilter(categoryName)
}
</script>

<template>
  <aside class="sidebar">
    <WidgetFeedbackBoard />
    <WidgetCategories @filter="handleFilterCategory" />
    <WidgetRoadmap />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  position: sticky;
  top: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 1024px) {
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
