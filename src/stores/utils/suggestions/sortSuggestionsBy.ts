import { LEAST_COMMENTS, LEAST_UPVOTES, MOST_COMMENTS, MOST_UPVOTES } from '@/constants'
import { calculateComments } from '@/helpers'
import type { ISuggestion, SortBy } from '@/types'

export function sortSuggestionsBy(sortBy: SortBy) {
  return (a: ISuggestion, b: ISuggestion) => {
    const aComments = a.comments ? calculateComments(a.comments) : 0
    const bComments = b.comments ? calculateComments(b.comments) : 0

    if (sortBy === MOST_UPVOTES) {
      return b.upvotes - a.upvotes
    }

    if (sortBy === LEAST_UPVOTES) {
      return a.upvotes - b.upvotes
    }
    if (sortBy === MOST_COMMENTS) {
      return bComments - aComments
    }
    if (sortBy === LEAST_COMMENTS) {
      return aComments - bComments
    }

    // not sort suggestion
    return 0
  }
}
