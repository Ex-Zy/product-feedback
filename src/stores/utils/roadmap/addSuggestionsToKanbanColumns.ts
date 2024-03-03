import type { IBoardColumn, ISuggestion } from '@/types'

export function addSuggestionsToKanbanColumns(
  columns: IBoardColumn[],
  suggestions: ISuggestion[]
): IBoardColumn[] {
  function findItemsByStatus(statusName: string): ISuggestion[] {
    return suggestions.filter(({ status }) => status === statusName)
  }

  function addItemsToKanbanColumns(): IBoardColumn[] {
    return columns.map((col) => ({ ...col, items: findItemsByStatus(col.id) }))
  }

  return addItemsToKanbanColumns()
}
