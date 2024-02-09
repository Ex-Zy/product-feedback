import { defineStore, storeToRefs } from 'pinia'
import { useSuggestionsStore } from '@/stores/suggestions'
import { computed } from 'vue'
import type { IFeedbackStatus } from '@/types'

const COLORS_OF_STATUS = {
  suggestion: '',
  planned: '#F49F85',
  'in-progress': '#AD1FEA',
  live: '#62BCFA'
}

export const useFeedbackStatuses = defineStore('feedbackStatuses', () => {
  const { suggestions } = storeToRefs(useSuggestionsStore())

  const feedbackStatuses = computed<IFeedbackStatus[]>(() => {
    const uniqStatuses = [...new Set(suggestions.value.map((item) => item.status))]

    return uniqStatuses.map((status) => {
      const amount = suggestions.value.filter((suggestion) => suggestion.status === status).length

      return {
        status,
        amount,
        label: status.charAt(0).toUpperCase() + status.slice(1),
        color: COLORS_OF_STATUS[status]
      }
    })
  })

  return { feedbackStatuses }
})
