<script setup lang="ts">
import { storeToRefs } from 'pinia'

import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import { useFeedbackStore } from '@/stores/feedback'
import { useSuggestionsStore } from '@/stores/suggestions'

const { suggestions } = storeToRefs(useSuggestionsStore())
const { upvoteFeedback } = useFeedbackStore()
</script>

<template>
  <TransitionGroup class="suggestions-list" name="list" tag="ul">
    <SuggestionsListItem
      v-for="suggestion in suggestions"
      :key="suggestion.id"
      :suggestion="suggestion"
      @upvote="upvoteFeedback"
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
