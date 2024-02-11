<script setup lang="ts">
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import type { ISuggestion } from '@/types'
import { reactive } from 'vue'
import { useConfetti } from '@/composables/useConfetti'

const { showConfetti } = useConfetti()
const { filteredSuggestions } = storeToRefs(useSuggestionsStore())

const upVotedSuggestions = reactive<number[]>([])
function handleUpVote(suggestion: ISuggestion) {
  if (!upVotedSuggestions.includes(suggestion.id)) {
    upVotedSuggestions.push(suggestion.id)
    suggestion.upvotes++
    showConfetti()
  }
}
function isUpVoted(id: number) {
  return upVotedSuggestions.includes(id)
}
</script>

<template>
  <TransitionGroup class="suggestions-list" name="list" tag="ul">
    <SuggestionsListItem
      v-for="suggestion in filteredSuggestions"
      :key="suggestion.id"
      :is-up-voted="isUpVoted(suggestion.id)"
      :suggestion="suggestion"
      @upvote="handleUpVote(suggestion)"
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
