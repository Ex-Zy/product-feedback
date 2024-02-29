<script setup lang="ts">
import WidgetCategories from '@/components/suggestions/sidebar/WidgetCategories.vue'
import WidgetFeedbackBoard from '@/components/suggestions/sidebar/WidgetFeedbackBoard.vue'
import WidgetRoadmap from '@/components/suggestions/sidebar/WidgetRoadmap.vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import { ref } from 'vue'
import type { FilterType } from '@/types'

const { loadSuggestionsToStore } = useSuggestionsStore()

function handleFilterCategory(filterBy: FilterType) {
  loadSuggestionsToStore({
    filterBy
  })
}

const isOpenSidebar = ref(false)
</script>

<template>
  <aside class="sidebar" :class="{ 'is-open': isOpenSidebar }">
    <WidgetFeedbackBoard v-model="isOpenSidebar" />
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

  @include tablet {
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @include mobile {
    width: 272px;
    position: fixed;
    z-index: 100;
    display: flex;
    gap: 24px;
    padding-block-start: calc(72px + 24px); // widget height + offset
    padding-inline: 24px;
    flex-direction: column;
    top: 0;
    right: -100%;
    bottom: 0;
    background: var(--color-6);
    transition: all 0.25s;

    &.is-open {
      right: 0;
    }
  }
}
</style>
