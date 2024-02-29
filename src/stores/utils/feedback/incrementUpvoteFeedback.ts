import type { ISuggestion } from '@/types'
import { toRef } from 'vue'

export function incrementUpvoteFeedback(suggestion: ISuggestion, isUpvoted: boolean): ISuggestion {
  const feedback = toRef<ISuggestion>(suggestion)

  // update state into store directly by link
  feedback.value.isUpvoted = isUpvoted
  feedback.value.upvotes++

  return {
    ...feedback.value
  }
}
