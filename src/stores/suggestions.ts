import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ISuggestion } from '@/types'

export const useSuggestionsStore = defineStore('suggestions', () => {
  const suggestions = ref<ISuggestion[]>([])

  function setSuggestions(newSuggestions: ISuggestion[]) {
    suggestions.value = newSuggestions
  }

  return { suggestions, setSuggestions }
})
