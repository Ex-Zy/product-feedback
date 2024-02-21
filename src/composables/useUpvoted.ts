import { useConfetti } from '@/composables/useConfetti'
import type { ISuggestion } from '@/types'
import { storeToRefs } from 'pinia'
import { useSuggestionsStore } from '@/stores/suggestions'

export const useUpvoted = () => {
  const { suggestions } = storeToRefs(useSuggestionsStore())
  const { showConfetti } = useConfetti()
  function setUpvoted(suggestion: ISuggestion, isUpvoted: boolean) {
    const foundSuggestion = suggestions.value.find((item) => item.id === suggestion.id)

    if (foundSuggestion) {
      foundSuggestion.isUpvoted = isUpvoted
      foundSuggestion.upvotes++
      showConfetti()
    }
  }

  return { setUpvoted }
}
