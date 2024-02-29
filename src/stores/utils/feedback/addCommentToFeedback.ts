import { useUserStore } from '@/stores/user'
import type { IComment } from '@/types'
import { storeToRefs } from 'pinia'
import { useFeedbackStore } from '@/stores/feedback'

export function addCommentToFeedback(commentMsg: string): IComment[] {
  const { feedback } = storeToRefs(useFeedbackStore())
  const { currentUser } = useUserStore()

  if (!feedback.value?.comments) return []

  const { comments } = feedback.value
  const newComment: IComment = {
    id: Date.now(),
    content: commentMsg,
    user: { ...currentUser }
  }

  return comments ? [...comments, newComment] : [newComment]
}
