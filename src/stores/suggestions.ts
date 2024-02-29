import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { FilterType, ISuggestion, SortBy, SuggestionsReturnType } from '@/types'
import { MOST_UPVOTES } from '@/constants'
import { apiFetchSuggestions } from '@/stores/utils/api/apiFetchSuggestions'
import { prepareSuggestionsResponse } from '@/stores/utils/suggestions/prepareSuggestionsResponse'

export interface Params {
  filterBy: FilterType
  sortBy: SortBy
}

export const useSuggestionsStore = defineStore('suggestions', () => {
  const loader = ref<boolean>(true)
  const error = ref<string | null>(null)

  const suggestions = ref<ISuggestion[]>([])
  const sortBy = ref<SortBy>(MOST_UPVOTES)
  const filterBy = ref<FilterType>('all')

  const suggestionsAmount = computed(() => suggestions.value.length)

  // Api calls
  async function fetchSuggestions(
    params = { filterBy: 'all', sortBy: MOST_UPVOTES } as Params
  ): SuggestionsReturnType {
    loader.value = true

    try {
      const response = await apiFetchSuggestions()

      if (!response) return

      // apply filter and sort
      return prepareSuggestionsResponse(response, params)
    } catch (err) {
      error.value = 'Failed to fetch any suggestions'
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  async function loadSuggestionsToStore(params: Partial<Params> = {}): Promise<void> {
    const response = await fetchSuggestions({
      sortBy: params.sortBy ?? sortBy.value,
      filterBy: params.filterBy ?? filterBy.value
    })

    if (response) {
      suggestions.value = response
    }
  }

  return {
    suggestions,
    suggestionsAmount,
    loader,
    error,
    filterBy,
    sortBy,
    fetchSuggestions,
    loadSuggestionsToStore
  }
})
