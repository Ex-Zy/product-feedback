<script setup lang="ts">
import WidgetCategories from '@/components/suggestions/sidebar/WidgetCategories.vue'
import WidgetFeedbackBoard from '@/components/suggestions/sidebar/WidgetFeedbackBoard.vue'
import WidgetRoadmap from '@/components/suggestions/sidebar/WidgetRoadmap.vue'
import { useSuggestionsStore } from '@/stores/suggestions'

const { setSelectedCategory } = useSuggestionsStore()

function handleSelectedCategory(categoryName: string) {
  setSelectedCategory(categoryName)
}
</script>

<template>
  <aside class="sidebar">
    <WidgetFeedbackBoard />
    <WidgetCategories @select-category="handleSelectedCategory" />
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
}
</style>
