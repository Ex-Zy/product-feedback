import type { IComment } from '@/types'

export function calculateComments(comments: IComment[]) {
  return comments.reduce((sum, comment) => {
    const commentsCount = (comment.replies?.length ?? 0) + 1 // replies + comment
    return sum + commentsCount
  }, 0)
}

export function isObject(object: Record<string, any>) {
  return object != null && typeof object === 'object'
}

export function deepEqual(object1: Record<string, any>, object2: Record<string, any>) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    const val1 = object1[key]
    const val2 = object2[key]
    const areObjects = isObject(val1) && isObject(val2)
    if ((areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false
    }
  }

  return true
}
