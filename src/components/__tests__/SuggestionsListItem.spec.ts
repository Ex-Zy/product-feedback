import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { suggestionMock } from '@/mock'
import SuggestionsListItem from '../suggestions/main/SuggestionsListItem.vue'
import UIUpVote from '../shared/UIUpVote.vue'
import UiCategory from '../shared/UiCategory.vue'
import { capitalize } from 'vue'

describe('SuggestionsListItem', () => {
  const wrapper = mount(SuggestionsListItem, {
    props: {
      suggestion: suggestionMock,
      isUpVoted: false
    }
  })

  const UpVote = wrapper.getComponent(UIUpVote)
  const Category = wrapper.getComponent(UiCategory)

  const title = wrapper.find('[data-test="title"]')
  const description = wrapper.find('[data-test="description"]')
  const amount = wrapper.find('[data-test="amount"]')

  it('renders properly', () => {
    expect(UpVote.text()).toContain('42')

    expect(title.text()).toContain('Ability to follow others')
    expect(description.text()).toContain(
      'Stay updated on comments and solutions other people post.'
    )
    expect(Category.text()).toContain(capitalize('feature'))

    expect(amount.text()).toContain('3')
  })

  it('emit upvote', async () => {
    await UpVote.setValue(42)
    expect(wrapper.emitted()).toHaveProperty('upvote')
  })
})
