<script setup lang="ts">
import { calculateComments } from '@/helpers'
import type { ISuggestion } from '@/types'
import UIUpVote from '@/components/common/UIUpVote.vue'
import UiCategory from '@/components/common/UiCategory.vue'
import { useMediaQuery } from '@vueuse/core'
import { computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  suggestion: ISuggestion
}

interface Emit {
  (e: 'upvote', suggestion: ISuggestion, isUpvoted: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const { suggestion } = toRefs(props)

const isMobile = useMediaQuery('(max-width: 767px)')
const align = computed(() => (isMobile.value ? 'horizontal' : 'vertical'))

const commentsAmount = computed(() => {
  return suggestion.value.comments ? calculateComments(suggestion.value.comments) : 0
})

function handleUpvote() {
  if (suggestion.value.isUpvoted) return

  emit('upvote', suggestion.value, true)
}

const route = useRoute()
const isFeedbackRoute = computed(() => route.name === 'feedback')
const feedbackUrl = computed(() => `/feedback/${suggestion.value.id}`)
const editUrl = computed(() => `/edit/${suggestion.value.id}`)
</script>

<template>
  <li class="suggestions-item" :data-id="suggestion.id">
    <div class="suggestions-item__vote">
      <UIUpVote
        :align="align"
        :is-upvoted="suggestion.isUpvoted"
        :model-value="suggestion.upvotes"
        @update:model-value="handleUpvote"
      />
    </div>
    <div class="suggestions-item__content">
      <router-link
        data-test="title"
        class="suggestions-item__title h3"
        :to="isFeedbackRoute ? editUrl : feedbackUrl"
      >
        {{ suggestion.title }}
      </router-link>
      <p data-test="description" class="suggestions-item__description b1">
        {{ suggestion.description }}
      </p>
      <UiCategory :name="suggestion.category" />
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

  @include mobile {
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 16px;
    padding: 24px;
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
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: var(--color-7-hover);
    }
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
