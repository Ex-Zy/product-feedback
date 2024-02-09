<script setup lang="ts">
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import UiCategory from '@/components/shared/UiCategory.vue'

const { selectedSuggestion } = storeToRefs(useSuggestionsStore())
</script>

<template>
  <ul class="suggestions-list">
    <li
      class="suggestions-list__item"
      v-for="suggestion in selectedSuggestion"
      :key="suggestion.id"
    >
      <div class="suggestions-list__vote"></div>
      <div class="suggestions-list__content">
        <h3 class="suggestions-list__title h3">{{ suggestion.title }}</h3>
        <p class="suggestions-list__description b1">{{ suggestion.description }}</p>
        <UiCategory :label="suggestion.category" />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.suggestions-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 24px 0 0;

  &__item {
    background: var(--color-4);
    border-radius: var(--radius-1);
    padding: 28px 32px;
    min-height: 150px;
    display: flex;
    column-gap: 40px;
  }

  &__description {
    margin: 4px 0 12px;
  }
}
</style>
