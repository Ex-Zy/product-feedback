<script setup lang="ts">
import { calculateComments, capitalize } from '@/helpers'
import type { IComment, ISuggestion } from '@/types'
import UIUpVote from '@/components/shared/UIUpVote.vue'
import UiCategory from '@/components/shared/UiCategory.vue'
import { useMediaQuery } from '@vueuse/core'
import { computed } from 'vue'

interface Props {
  id: number
  upvotes: number
  title: string
  description: string
  category: string
  comments?: IComment[]
  isUpVoted: boolean
}

interface Emit {
  (e: 'upvote'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const isMobile = useMediaQuery('(max-width: 767px)')
const align = computed(() => (isMobile.value ? 'horizontal' : 'vertical'))

const commentsAmount = computed(() => {
  return props.comments ? calculateComments(props.comments) : 0
})
</script>

<template>
  <li class="suggestions-item" :data-id="props.id">
    <div class="suggestions-item__vote">
      <UIUpVote
        :align="align"
        :is-upvoted="props.isUpVoted"
        :model-value="props.upvotes"
        @update:model-value="emit('upvote')"
      />
    </div>
    <div class="suggestions-item__content">
      <h3 data-test="title" class="suggestions-item__title h3">{{ props.title }}</h3>
      <p data-test="description" class="suggestions-item__description b1">
        {{ props.description }}
      </p>
      <UiCategory :name="props.category" />
    </div>
    <div data-test="amount" class="suggestions-item__comment-amount">
      <img src="@/assets/shared/icon-comments.svg" alt="Comment icon" />
      {{ commentsAmount }}
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
      flex-basis: 100%;
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
