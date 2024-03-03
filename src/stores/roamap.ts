import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { useSuggestionsStore } from '@/stores/suggestions'
import { addSuggestionsToKanbanColumns } from '@/stores/utils/roadmap/addSuggestionsToKanbanColumns'
import type { BoardColumnsReturnType, IBoard } from '@/types'

export const useRoadmapStore = defineStore('roadmap', () => {
  const { fetchSuggestions } = useSuggestionsStore()

  const loader = ref(true)
  const error = ref<string | null>(null)
  const kanban = reactive<IBoard>({
    name: 'Roadmap',
    columns: [
      {
        id: 'planned',
        name: 'Planned',
        description: 'Ideas prioritized for research',
        color: '#F49F85',
        group: 'items',
        items: []
      },
      {
        id: 'in-progress',
        name: 'In-progress',
        description: 'Currently being developed',
        color: '#AD1FEA',
        group: 'items',
        items: []
      },
      {
        id: 'live',
        name: 'Live',
        description: 'Released features',
        color: '#62BCFA',
        group: 'items',
        items: []
      }
    ]
  })

  async function fetchKanbanColumns(): BoardColumnsReturnType {
    loader.value = true

    try {
      const suggestions = await fetchSuggestions()

      if (!suggestions) return

      return addSuggestionsToKanbanColumns(kanban.columns, suggestions)
    } catch (err) {
      error.value = 'Failed to load feedback'
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  async function loadRoadmapToStore() {
    const columns = await fetchKanbanColumns()

    if (!columns) return

    kanban.columns = columns
  }

  return {
    loader,
    error,

    kanban,
    fetchKanbanColumns,
    loadRoadmapToStore
  }
})
