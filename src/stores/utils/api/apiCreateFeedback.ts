import { API_PRODUCTS } from '@/constants'
import type { FeedbackReturnType, InputSuggestion, ISuggestion } from '@/types'

function _transformToValidFeedback(newFeedback: InputSuggestion): ISuggestion {
  return Object.assign(
    {
      id: Date.now(),
      upvotes: 0,
      isUpvoted: false,
      status: 'suggestion'
    },
    newFeedback
  )
}

export async function apiCreateFeedback(newFeedback: InputSuggestion): FeedbackReturnType {
  const feedback = _transformToValidFeedback(newFeedback)

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(feedback)
  }

  const response = await fetch(API_PRODUCTS, requestOptions)

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }

  return await response.json()
}
