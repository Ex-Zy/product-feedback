import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ISuggestion } from '@/types'
import { LEAST_COMMENTS, LEAST_UPVOTES, MOST_COMMENTS, MOST_UPVOTES } from '@/constants'
import { calculateComments } from '@/helpers'

export const useSuggestionsStore = defineStore('suggestions', () => {
  const suggestions = ref<ISuggestion[]>([])

  function setSuggestions(newSuggestions: ISuggestion[]) {
    suggestions.value = newSuggestions
  }

  const sortBy = ref(MOST_UPVOTES)
  const filter = ref('all')
  const filteredSuggestions = computed<ISuggestion[]>(() => {
    // filtered by selected category(like: bug, feature, etc...)
    const filtered = suggestions.value.filter((item) => {
      return filter.value === 'all' || filter.value === item.category
    })
    // sorted by one of suggestion attribute(most comments, most upvotes, etc...)
    return filtered.sort((a, b) => {
      const aComments = a.comments ? calculateComments(a.comments) : 0
      const bComments = b.comments ? calculateComments(b.comments) : 0

      if (sortBy.value === MOST_UPVOTES) {
        return b.upvotes - a.upvotes
      }

      if (sortBy.value === LEAST_UPVOTES) {
        return a.upvotes - b.upvotes
      }
      if (sortBy.value === MOST_COMMENTS) {
        return bComments - aComments
      }
      if (sortBy.value === LEAST_COMMENTS) {
        return aComments - bComments
      }

      // not sort suggestion
      return 0
    })
  })
  const filteredSuggestionsCount = computed(() => filteredSuggestions.value.length)

  function setFilter(category: string) {
    filter.value = category
  }

  return {
    suggestions,
    filteredSuggestions,
    filteredSuggestionsCount,
    filter,
    sortBy,
    setSuggestions,
    setFilter
  }
})
