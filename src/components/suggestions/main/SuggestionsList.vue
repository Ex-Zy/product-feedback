<script setup lang="ts">
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import { useFeedbackStore } from '@/stores/feedback'

const { suggestions } = storeToRefs(useSuggestionsStore())
const { upvoteFeedback } = useFeedbackStore()
</script>

<template>
  <TransitionGroup class="suggestions-list" name="list" tag="ul">
    <SuggestionsListItem
      v-for="suggestion in suggestions"
      :key="suggestion.id"
      :id="suggestion.id"
      :upvotes="suggestion.upvotes"
      :category="suggestion.category"
      :title="suggestion.title"
      :description="suggestion.description"
      :comments="suggestion.comments"
      :is-up-voted="suggestion.isUpvoted"
      @upvote="(isUpvoted) => upvoteFeedback(suggestion, isUpvoted)"
    />
  </TransitionGroup>
</template>

<style scoped lang="scss">
.suggestions-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @include mobile {
    padding-inline: 24px;
  }
}
</style>
