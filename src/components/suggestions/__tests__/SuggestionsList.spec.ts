import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import FloatingVue from 'floating-vue'
import { createPinia } from 'pinia'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import SuggestionsList from '@/components/suggestions/main/SuggestionsList.vue'
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import router from '@/router'
import { useSuggestionsStore } from '@/stores/suggestions'

describe('Test SuggestionsListItem.vue component', () => {
  let wrapper: VueWrapper<InstanceType<typeof SuggestionsList>>

  beforeEach(() => {
    wrapper = mount(SuggestionsList, {
      global: {
        plugins: [router, createPinia(), FloatingVue]
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('Rendering with correct items amount', async () => {
    const store = useSuggestionsStore()

    await store.loadSuggestionsToStore()
    await flushPromises()

    expect(wrapper.findAllComponents(SuggestionsListItem)).toHaveLength(12)
  })
})
