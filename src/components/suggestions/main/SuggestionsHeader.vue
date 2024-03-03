<script setup lang="ts">
import { storeToRefs } from 'pinia'

import IconSuggestions from '@/components/common/icons/IconSuggestions.vue'
import UIButton from '@/components/common/UIButton.vue'
import SortBySelect from '@/components/suggestions/SortBySelect.vue'
import router from '@/router'
import { useSuggestionsStore } from '@/stores/suggestions'
import type { SortBy } from '@/types'

const { suggestionsAmount, sortBy } = storeToRefs(useSuggestionsStore())
const { loadSuggestionsToStore } = useSuggestionsStore()

function handleSort(sortBy: SortBy) {
  loadSuggestionsToStore({ sortBy })
}

function redirectToCreate() {
  router.push('/create')
}
</script>

<template>
  <header class="suggestions-header">
    <IconSuggestions class="suggestions-header__icon" />
    <div class="suggestions-header__count h3">{{ suggestionsAmount }} Suggestions</div>
    <SortBySelect :model-value="sortBy" @update:model-value="handleSort" />
    <UIButton text="+ Add Feedback" class="suggestions-header__btn" @click="redirectToCreate" />
  </header>
</template>

<style scoped lang="scss">
.suggestions-header {
  position: sticky;
  z-index: 100;
  top: 10px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 14px 16px 14px 24px;
  margin: 0 0 24px;
  height: 72px;
  border-radius: var(--radius-1);
  background: var(--color-3);

  @include mobile {
    border-radius: 0;
    top: 72px;
    margin: 0;

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
