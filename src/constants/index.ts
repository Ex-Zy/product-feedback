import type { ISuggestion } from '@/types'

export const MOST_UPVOTES = 'Most Upvotes'
export const LEAST_UPVOTES = 'Least Upvotes'
export const MOST_COMMENTS = 'Most Comments'
export const LEAST_COMMENTS = 'Least Comments'

export const DEFAULT_SUGGESTION: ISuggestion = {
  id: 0,
  title: '',
  description: '',
  category: 'enhancement',
  upvotes: 0,
  isUpvoted: false,
  status: 'suggestion'
}
