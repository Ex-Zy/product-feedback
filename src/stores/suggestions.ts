import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { FilterType, ISuggestion, SortBy } from '@/types'
import { MOST_UPVOTES } from '@/constants'
import { sortSuggestionsBy } from '@/stores/utils/sortSuggestionsBy'
import { productRequests } from '@/data/data.json'
import { filterSuggestionsByCategory } from '@/stores/utils/filterSuggestionsByCategory'

interface Params {
  filterBy: FilterType
  sortBy: SortBy
}

type SuggestionsReturnType = Promise<ISuggestion[] | undefined>

export const useSuggestionsStore = defineStore('suggestions', () => {
  const loader = ref<boolean>(false)
  const error = ref<string | null>(null)

  const suggestions = ref<ISuggestion[]>([])
  const sortBy = ref<SortBy>(MOST_UPVOTES)
  const filterBy = ref<FilterType>('all')

  const suggestionsAmount = computed(() => suggestions.value.length)

  // Api calls
  async function fetchSuggestions(
    params = { filterBy: 'all', sortBy: MOST_UPVOTES } as Params,
    delay = 300
  ): SuggestionsReturnType {
    loader.value = true

    try {
      const promiseResponse = new Promise<ISuggestion[]>((resolve, reject) => {
        setTimeout(() => resolve(productRequests), delay)
      })
      const response: ISuggestion[] = await promiseResponse

      sortBy.value = params.sortBy
      filterBy.value = params.filterBy

      return response
        ?.filter(filterSuggestionsByCategory(params.filterBy))
        ?.sort(sortSuggestionsBy(params.sortBy))
    } catch (err) {
      error.value = 'Failed to fetch any suggestions'
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  async function loadSuggestionsPageDataToStore(params: Partial<Params> = {}): Promise<void> {
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
    loadSuggestionsPageDataToStore
  }
})
