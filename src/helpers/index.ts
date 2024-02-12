import type { IComment } from '@/types'

export function calculateComments(comments: IComment[]) {
  return comments.reduce((sum, comment) => {
    const commentsCount = (comment.replies?.length ?? 0) + 1 // replies + comment
    return sum + commentsCount
  }, 0)
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
