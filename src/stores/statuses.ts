import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IStatus, ISuggestion } from '@/types'

export const useStatuses = defineStore('statuses', () => {
  const statuses = ref<IStatus[]>([
    {
      status: 'planned',
      amount: 0,
      name: 'planned',
      label: 'Planned',
      color: '#F49F85'
    },
    {
      status: 'in-progress',
      amount: 0,
      name: 'in-progress',
      label: 'In-progress',
      color: '#AD1FEA'
    },
    { status: 'live', amount: 0, name: 'live', label: 'Live', color: '#62BCFA' },
    { status: 'suggestion', amount: 0, name: 'suggestion', label: 'Suggestion', color: '' }
  ])

  function calculateStatusesAmount(suggestions: ISuggestion[]) {
    statuses.value = statuses.value.map((status) => {
      const amount = suggestions.filter((suggestion) => suggestion.status === status.status).length

      return {
        ...status,
        amount
      }
    })
  }

  return { statuses, calculateStatusesAmount }
})
