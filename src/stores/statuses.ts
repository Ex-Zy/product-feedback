import { defineStore, storeToRefs } from 'pinia'
import { useSuggestionsStore } from '@/stores/suggestions'
import { computed } from 'vue'
import type { IStatus } from '@/types'
import { capitalize } from '@/helpers'

const COLORS_OF_STATUS = {
  suggestion: '',
  planned: '#F49F85',
  'in-progress': '#AD1FEA',
  live: '#62BCFA'
}

export const useStatuses = defineStore('statuses', () => {
  const { suggestions } = storeToRefs(useSuggestionsStore())

  const statuses = computed<IStatus[]>(() => {
    const uniqStatuses = [...new Set(suggestions.value.map((item) => item.status))]

    return uniqStatuses.map((status) => {
      const amount = suggestions.value.filter((suggestion) => suggestion.status === status).length

      return {
        status,
        amount,
        name: status,
        label: capitalize(status),
        color: COLORS_OF_STATUS[status]
      }
    })
  })

  return { statuses }
})
