import { API_PRODUCTS } from '@/constants'
import type { SuggestionsReturnType } from '@/types'

export async function apiFetchSuggestions(): SuggestionsReturnType {
  const response: Response = await fetch(API_PRODUCTS)

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }

  return await response.json()
}
