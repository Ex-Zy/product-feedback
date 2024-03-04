import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import FloatingVue from 'floating-vue'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import UiCategory from '@/components/common/UiCategory.vue'
import UIUpVote from '@/components/common/UIUpVote.vue'
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import router from '@/router'

describe('Render Suggestion with correct data', () => {
  const wrapper: VueWrapper<InstanceType<typeof SuggestionsListItem>> = mount(SuggestionsListItem, {
    props: {
      suggestion: {
        id: '6',
        title: 'Preview images not loading',
        category: 'bug',
        upvotes: 3,
        isUpvoted: false,
        status: 'suggestion',
        description: 'Challenge preview images are missing when you apply a filter.'
      }
    },
    global: {
      plugins: [router, FloatingVue]
    }
  })

  it('correct title', () => {
    expect(wrapper.find('[data-test="title"]').text()).toMatch('Preview images not loading')
  })

  it('correct description', () => {
    expect(wrapper.find('[data-test="description"]').text()).toMatch(
      'Challenge preview images are missing when you apply a filter.'
    )
  })

  it('correct number of comments', () => {
    expect(wrapper.find('[data-test="amount"]').text()).toMatch('0')
  })

  it('correct category', () => {
    expect(wrapper.findComponent(UiCategory).text()).toMatch('bug')
  })

  it('correct upvote', () => {
    expect(wrapper.findComponent(UIUpVote).text()).toMatch('3')
  })
})

describe('Suggestion produce correct input/output', () => {
  let wrapper: VueWrapper<InstanceType<typeof SuggestionsListItem>>

  beforeEach(() => {
    wrapper = mount(SuggestionsListItem, {
      props: {
        suggestion: {
          id: '1', // id must be for vue-router
          title: '',
          category: '',
          upvotes: 0,
          isUpvoted: false,
          status: '',
          description: ''
        }
      },
      global: {
        plugins: [router, FloatingVue]
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('correct initial state', () => {
    expect(wrapper.find('[data-test="title"]').text()).toMatch('')
    expect(wrapper.find('[data-test="description"]').text()).toMatch('')
    expect(wrapper.find('[data-test="amount"]').text()).toMatch('')
    expect(wrapper.findComponent(UiCategory).text()).toMatch('')
    expect(wrapper.findComponent(UIUpVote).text()).toMatch('0')
  })

  it('correct props', async () => {
    await wrapper.setProps({
      suggestion: {
        id: '1',
        title: 'Test',
        category: 'bug',
        upvotes: 1,
        isUpvoted: false,
        status: 'suggestion',
        description: 'Test'
      }
    })

    // Wait DOM updates
    await flushPromises()

    expect(wrapper.vm.suggestion.id).toMatch('1')
    expect(wrapper.vm.suggestion.title).toMatch('Test')
    expect(wrapper.vm.suggestion.category).toMatch('bug')
    expect(wrapper.vm.suggestion.upvotes).toBe(1)
    expect(wrapper.vm.suggestion.isUpvoted).toBeFalsy()
    expect(wrapper.vm.suggestion.status).toMatch('suggestion')
    expect(wrapper.vm.suggestion.description).toMatch('Test')
  })

  it('emit upvote event', async () => {
    await wrapper.findComponent(UIUpVote).setValue(4)
    expect(wrapper.emitted()).toHaveProperty('upvote')
  })
})
