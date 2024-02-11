<script setup lang="ts">
import { calculateComments } from '@/helpers'
import type { ISuggestion } from '@/types'
import UIUpVote from '@/components/shared/UIUpVote.vue'
import UiCategory from '@/components/shared/UiCategory.vue'
import { useMediaQuery } from '@vueuse/core'

interface Props {
  suggestion: ISuggestion
  isUpVoted: boolean
}

interface Emit {
  (e: 'upvote'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const isMobile = useMediaQuery('(max-width: 767px)')
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
</script>

<template>
  <li class="suggestions-item" :key="suggestion.id">
    <div class="suggestions-item__vote">
      <UIUpVote
        :align="isMobile ? 'horizontal' : 'vertical'"
        :is-disabled="props.isUpVoted"
        :model-value="suggestion.upvotes"
        @update:model-value="emit('upvote')"
      />
    </div>
    <div class="suggestions-item__content">
      <h3 class="suggestions-item__title h3">{{ suggestion.title }}</h3>
      <p class="suggestions-item__description b1">{{ suggestion.description }}</p>
      <UiCategory :label="capitalize(suggestion.category)" />
    </div>
    <div class="suggestions-item__comment-amount">
      <img src="@/assets/shared/icon-comments.svg" alt="Comment icon" />
      {{ suggestion.comments ? calculateComments(suggestion.comments) : 0 }}
    </div>
  </li>
</template>

<style scoped lang="scss">
.suggestions-item {
  background: var(--color-4);
  border-radius: var(--radius-1);
  padding: 28px 32px;
  min-height: 150px;
  display: flex;
  column-gap: 40px;
  cursor: pointer;

  @include mobile {
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 16px;
    padding: 24px;
  }

  &:hover {
    .suggestions-item__title {
      color: var(--color-7-hover);
    }
  }

  &__vote {
    @include mobile {
      order: 2;
    }
  }

  &__content {
    flex-grow: 1;

    @include mobile {
      order: 1;
    }
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

    @include mobile {
      order: 3;
    }
  }
}
</style>
