import { API_PRODUCTS } from '@/constants'
import type { FeedbackReturnType, ISuggestion } from '@/types'

export async function apiEditFeedback(suggestion: ISuggestion): FeedbackReturnType {
  const url = `${API_PRODUCTS}/${suggestion.id}`

  const requestOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(suggestion)
  }

  const response = await fetch(url, requestOptions)

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }

  return await response.json()
}
