import type { ICategory, ISuggestion } from '@/types'

export const API_URL = import.meta.env.VITE_API_URL
export const API_USER = `${API_URL}/currentUser`
export const API_PRODUCTS = `${API_URL}/productRequests`

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

export const CATEGORIES: ICategory[] = [
  { id: 2, name: 'ui', label: 'UI' },
  { id: 3, name: 'ux', label: 'UX' },
  { id: 4, name: 'enhancement', label: 'Enhancement' },
  { id: 5, name: 'bug', label: 'Bug' },
  { id: 6, name: 'feature', label: 'Feature' }
]
