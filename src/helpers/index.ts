import type { IComment } from '@/types'

export function calculateComments(comments: IComment[]) {
  return comments.reduce((sum, comment) => {
    const commentsCount = (comment.replies?.length ?? 0) + 1 // replies + comment
    return sum + commentsCount
  }, 0)
}
