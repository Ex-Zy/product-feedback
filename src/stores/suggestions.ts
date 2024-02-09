import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ISuggestion } from '@/types'

export const useSuggestionsStore = defineStore('suggestions', () => {
  const suggestions = ref<ISuggestion[]>([])

  const filter = ref('all')
  const filteredSuggestions = computed<ISuggestion[]>(() => {
    return suggestions.value.filter((item) => {
      if (filter.value === 'all') return item

      return item.category === filter.value
    })
  })
  const filteredSuggestionsCount = computed(() => filteredSuggestions.value.length)

  function setFilter(category: string) {
    filter.value = category
  }

  function setSuggestions(newSuggestions: ISuggestion[]) {
    suggestions.value = newSuggestions
  }

  return {
    suggestions,
    filteredSuggestions,
    filteredSuggestionsCount,
    filter,
    setSuggestions,
    setFilter
  }
})
