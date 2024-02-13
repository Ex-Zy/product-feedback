import type { ISuggestion } from '@/types'

export const mockSuggestions: ISuggestion[] = [
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.'
  },
  {
    id: 2,
    title: 'Add a dark theme option',
    category: 'feature',
    upvotes: 99,
    status: 'suggestion',
    description: 'It would help people with light sensitivities and who prefer dark mode.'
  },
  {
    id: 11,
    title: 'Animated solution screenshots',
    category: 'bug',
    upvotes: 9,
    status: 'in-progress',
    description: 'Screenshots of solutions with animations don’t display correctly.'
  }
]

// for sort
export const mockByMostUpvotesSuggestions: ISuggestion[] = [
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.'
  },
  {
    id: 2,
    title: 'Add a dark theme option',
    category: 'feature',
    upvotes: 99,
    status: 'suggestion',
    description: 'It would help people with light sensitivities and who prefer dark mode.'
  },
  {
    id: 11,
    title: 'Animated solution screenshots',
    category: 'bug',
    upvotes: 9,
    status: 'in-progress',
    description: 'Screenshots of solutions with animations don’t display correctly.'
  }
]
export const mockSuggestionsByLeastUpvotes: ISuggestion[] = [
  {
    id: 11,
    title: 'Animated solution screenshots',
    category: 'bug',
    upvotes: 9,
    status: 'in-progress',
    description: 'Screenshots of solutions with animations don’t display correctly.'
  },
  {
    id: 2,
    title: 'Add a dark theme option',
    category: 'feature',
    upvotes: 99,
    status: 'suggestion',
    description: 'It would help people with light sensitivities and who prefer dark mode.'
  },
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.'
  }
]

// for filter
export const mockBugSuggestions: ISuggestion[] = [
  {
    id: 11,
    title: 'Animated solution screenshots',
    category: 'bug',
    upvotes: 9,
    status: 'in-progress',
    description: 'Screenshots of solutions with animations don’t display correctly.'
  }
]

export const mockEnhancementSuggestions: ISuggestion[] = [
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.'
  }
]

export const mockFeatureSuggestions: ISuggestion[] = [
  {
    id: 2,
    title: 'Add a dark theme option',
    category: 'feature',
    upvotes: 99,
    status: 'suggestion',
    description: 'It would help people with light sensitivities and who prefer dark mode.'
  }
]
