import type { ISuggestion } from '@/types'

export function filterSuggestionsByCategory(filter: string) {
  return (item: ISuggestion) => {
    return filter === 'all' || filter === item.category
  }
}
