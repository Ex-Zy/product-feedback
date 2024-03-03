import { mount, VueWrapper } from '@vue/test-utils'
import { describe, expect,it } from 'vitest'

import type { IComment } from '@/types'

import UiCategory from '../common/UiCategory.vue'
import UIUpVote from '../common/UIUpVote.vue'
import SuggestionsListItem from '../suggestions/main/SuggestionsListItem.vue'

const comments: IComment[] = [
  {
    id: 8,
    content:
      'I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?',
    user: {
      image: './assets/user-images/image-victoria.jpg',
      name: 'Victoria Mejia',
      username: 'arlen_the_marlin'
    },
    replies: [
      {
        id: 100,
        content:
          "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
        replyingTo: 'arlen_the_marlin',
        user: {
          image: './assets/user-images/image-zena.jpg',
          name: 'Zena Kelley',
          username: 'velvetround'
        }
      }
    ]
  },
  {
    id: 9,
    content:
      "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
    user: {
      image: './assets/user-images/image-jackson.jpg',
      name: 'Jackson Barker',
      username: 'countryspirit'
    }
  }
]

describe('SuggestionsListItem.vue Test', () => {
  const wrapper: VueWrapper = mount(SuggestionsListItem, {
    props: {
      suggestion: {
        id: 5,
        title: 'Ability to follow others',
        category: 'feature',
        status: 'live',
        upvotes: 42,
        description: 'Stay updated on comments and solutions other people post.',
        isUpvoted: false,
        comments
      }
    }
  })

  it('render title', () => {
    expect(wrapper.find('[data-test="title"]').text()).toMatch('Ability to follow others')
  })

  it('render description', () => {
    expect(wrapper.find('[data-test="description"]').text()).toMatch(
      'Stay updated on comments and solutions other people post.'
    )
  })

  it('render comments amount', () => {
    expect(wrapper.find('[data-test="amount"]').text()).toMatch('3')
  })

  it('render category', () => {
    expect(wrapper.findComponent(UiCategory).text()).toMatch('feature')
  })

  it('render upvote', () => {
    expect(wrapper.findComponent(UIUpVote).text()).toMatch('42')
  })

  it('emit upvote event', async () => {
    await wrapper.findComponent(UIUpVote).setValue(42)
    expect(wrapper.emitted()).toHaveProperty('upvote')
  })
})
