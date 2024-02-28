import { API_PRODUCTS } from '@/constants'
import type { ISuggestion } from '@/types'

interface UpvoteOptions {
  isUpvoted: boolean
  upvotes: number
}
export async function apiUpvoteFeedback(
  suggestionId: number,
  options: UpvoteOptions
): Promise<ISuggestion> {
  const url = `${API_PRODUCTS}/${suggestionId}`

  const requestOptions: RequestInit = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  }

  const response = await fetch(url, requestOptions)

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }

  return await response.json()
}
