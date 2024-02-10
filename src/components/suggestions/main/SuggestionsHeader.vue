<script setup lang="ts">
import IconSuggestions from '@/components/icons/IconSuggestions.vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import UIButton from '@/components/shared/UIButton.vue'
import SortBy from '@/components/suggestions/SortBy.vue'

const { filteredSuggestionsCount, sortBy } = storeToRefs(useSuggestionsStore())
</script>

<template>
  <header class="suggestions-header">
    <IconSuggestions class="suggestions-header__icon" />
    <div class="suggestions-header__count h3">{{ filteredSuggestionsCount }} Suggestions</div>
    <SortBy v-model="sortBy" />
    <UIButton text="+ Add Feedback" class="suggestions-header__btn" />
  </header>
</template>

<style scoped lang="scss">
.suggestions-header {
  position: sticky;
  top: 10px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 14px 16px 14px 24px;
  margin: 0 0 24px;
  height: 72px;
  border-radius: var(--radius-1);
  background: var(--color-3);

  @media screen and (max-width: 767px) {
    border-radius: 0;
    top: 72px;

    .suggestions-header {
      &__icon,
      &__count {
        display: none;
      }
    }
  }

  &__count {
    color: var(--color-4);
  }

  &__btn {
    margin-left: auto;
  }
}
</style>
