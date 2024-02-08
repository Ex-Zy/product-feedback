import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ISuggestion } from '@/types'

export const useSuggestionsStore = defineStore('suggestions', () => {
  const suggestions = ref<ISuggestion[]>([])

  const selectedCategory = ref('all')
  const selectedSuggestion = computed<ISuggestion[]>(() => {
    return suggestions.value.filter((item) => {
      if (selectedCategory.value === 'all') return item

      return item.category === selectedCategory.value
    })
  })
  const selectedSuggestionCount = computed(() => selectedSuggestion.value.length)

  function setSelectedCategory(category: string) {
    selectedCategory.value = category
  }

  function setSuggestions(newSuggestions: ISuggestion[]) {
    suggestions.value = newSuggestions
  }

  return {
    suggestions,
    selectedSuggestion,
    selectedSuggestionCount,
    selectedCategory,
    setSuggestions,
    setSelectedCategory
  }
})
