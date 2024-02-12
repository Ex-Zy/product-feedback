import type { ISuggestion } from '@/types'

export const suggestionMock: ISuggestion = {
  id: 5,
  title: 'Ability to follow others',
  category: 'feature',
  upvotes: 42,
  status: 'suggestion',
  description: 'Stay updated on comments and solutions other people post.',
  comments: [
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
}
