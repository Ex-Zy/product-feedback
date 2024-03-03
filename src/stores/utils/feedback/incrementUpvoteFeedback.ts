import { toRef } from 'vue'

import type { ISuggestion } from '@/types'

export function incrementUpvoteFeedback(suggestion: ISuggestion, isUpvoted: boolean): ISuggestion {
  const feedback = toRef<ISuggestion>(suggestion)

  // update state into store directly by link
  feedback.value.isUpvoted = isUpvoted
  feedback.value.upvotes++

  return {
    ...feedback.value
  }
}
