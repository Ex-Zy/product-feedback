<script setup lang="ts">
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import UiCategory from '@/components/shared/UiCategory.vue'
import UIUpVote from '@/components/shared/UIUpVote.vue'
import type { ISuggestion } from '@/types'
import { reactive } from 'vue'

interface Emit {
  (e: 'upvote'): void
}

const emit = defineEmits<Emit>()

const { filteredSuggestions } = storeToRefs(useSuggestionsStore())

function uppercaseCategoryName(category: string) {
  const firstLetter = category[0].toUpperCase()

  return firstLetter + category.slice(1)
}

const upVotedSuggestions = reactive<number[]>([])
function handleUpVote(suggestion: ISuggestion) {
  if (!upVotedSuggestions.includes(suggestion.id)) {
    upVotedSuggestions.push(suggestion.id)
    suggestion.upvotes++
    emit('upvote')
  }
}
function isUpVoted(id: number) {
  return upVotedSuggestions.includes(id)
}
</script>

<template>
  <TransitionGroup class="suggestions-list" name="list" tag="ul">
    <li
      class="suggestions-list__item"
      v-for="suggestion in filteredSuggestions"
      :key="suggestion.id"
    >
      <div class="suggestions-list__vote">
        <UIUpVote
          :is-disabled="isUpVoted(suggestion.id)"
          :model-value="suggestion.upvotes"
          @update:model-value="handleUpVote(suggestion)"
        />
      </div>
      <div class="suggestions-list__content">
        <h3 class="suggestions-list__title h3">{{ suggestion.title }}</h3>
        <p class="suggestions-list__description b1">{{ suggestion.description }}</p>
        <UiCategory :label="uppercaseCategoryName(suggestion.category)" />
      </div>
      <div class="suggestions-list__comment-amount" v-if="suggestion.comments">
        <img src="@/assets/shared/icon-comments.svg" alt="Comment icon" />
        {{ suggestion.comments?.length }}
      </div>
    </li>
  </TransitionGroup>
</template>

<style scoped lang="scss">
.suggestions-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__item {
    background: var(--color-4);
    border-radius: var(--radius-1);
    padding: 28px 32px;
    min-height: 150px;
    display: flex;
    column-gap: 40px;
    cursor: pointer;

    &:hover {
      .suggestions-list__title {
        color: var(--color-7-hover);
      }
    }
  }

  &__content {
    flex-grow: 1;
  }

  &__title {
    transition: color 0.25s;
  }

  &__description {
    margin: 4px 0 12px;
  }

  &__comment-amount {
    display: flex;
    gap: 8px;
    align-items: center;
    font:
      700 16px/1 'Jost',
      sans-serif;
    letter-spacing: -0.222px;
    color: var(--color-7);
  }
}
</style>
