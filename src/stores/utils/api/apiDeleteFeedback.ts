import { API_PRODUCTS } from '@/constants'
import type { ISuggestion } from '@/types'

export async function apiDeleteFeedback(id: string): Promise<ISuggestion> {
  const response = await fetch(`${API_PRODUCTS}/${id}`, { method: 'DELETE' })

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`)
  }

  return await response.json()
}
