import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useSuggestionsStore } from '../suggestions'
import { LEAST_UPVOTES, MOST_UPVOTES } from '../../constants'
import {
  mockBugSuggestions,
  mockByMostUpvotesSuggestions,
  mockEnhancementSuggestions,
  mockFeatureSuggestions,
  mockSuggestions,
  mockSuggestionsByLeastUpvotes
} from '../../mock'

describe('suggestions store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('correct initial state', () => {
    const store = useSuggestionsStore()

    expect(store.suggestions).toEqual([])
    expect(store.sortBy).toMatch(MOST_UPVOTES)
    expect(store.filter).toMatch('all')
    expect(store.filteredSuggestions).toEqual([])
  })

  it('set state', () => {
    const store = useSuggestionsStore()

    store.setSuggestionsToStore(mockSuggestions)
    expect(store.suggestions).toEqual(mockSuggestions)

    store.setFilter('feature')
    expect(store.filter).toMatch('feature')
  })

  it('getter filteredSuggestions - filter by all/enhancement/feature/bug', () => {
    const store = useSuggestionsStore()

    store.setSuggestionsToStore(mockSuggestions)

    store.setFilter('all')
    expect(store.filteredSuggestions).toEqual(mockSuggestions)

    store.setFilter('enhancement')
    expect(store.filteredSuggestions).toEqual(mockEnhancementSuggestions)

    store.setFilter('feature')
    expect(store.filteredSuggestions).toEqual(mockFeatureSuggestions)

    store.setFilter('bug')
    expect(store.filteredSuggestions).toEqual(mockBugSuggestions)
  })

  it('getter filteredSuggestions - sort by least/most upvotes', () => {
    const store = useSuggestionsStore()

    store.setSuggestionsToStore(mockSuggestions)
    store.sortBy = LEAST_UPVOTES
    expect(store.filteredSuggestions).toEqual(mockSuggestionsByLeastUpvotes)

    store.sortBy = MOST_UPVOTES
    expect(store.filteredSuggestions).toEqual(mockByMostUpvotesSuggestions)
  })

  it('getter filteredSuggestionsCount - must be 3', () => {
    const store = useSuggestionsStore()

    store.setSuggestionsToStore(mockSuggestions)
    store.setFilter('all')
    expect(store.filteredSuggestionsCount).toBe(3)
  })
})
