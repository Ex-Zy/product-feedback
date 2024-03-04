import { flushPromises } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useSuggestionsStore } from '@/stores/suggestions'

describe('Test "suggestions" store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Correct initial state', () => {
    const state = useSuggestionsStore()

    expect(state.suggestions).toEqual([])
    expect(state.loader).toBeTruthy()
    expect(state.error).toBeNull()
  })

  it('Call "loadSuggestionsToStore" must add data to store', async () => {
    const state = useSuggestionsStore()

    expect(state.loader).toBeTruthy()

    await state.loadSuggestionsToStore()
    await flushPromises()

    expect(state.suggestions).toHaveLength(12)
    expect(state.loader).toBeFalsy()
  })
})
