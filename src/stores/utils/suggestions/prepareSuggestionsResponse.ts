import type { ISuggestion } from '@/types'
import { type Params, useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import { filterSuggestionsByCategory } from '@/stores/utils/suggestions/filterSuggestionsByCategory'
import { sortSuggestionsBy } from '@/stores/utils/suggestions/sortSuggestionsBy'

export function prepareSuggestionsResponse(response: ISuggestion[], params: Params): ISuggestion[] {
  const { filterBy, sortBy } = storeToRefs(useSuggestionsStore())

  filterBy.value = params.filterBy
  sortBy.value = params.sortBy

  return response
    .filter(filterSuggestionsByCategory(params.filterBy))
    .sort(sortSuggestionsBy(params.sortBy))
}
