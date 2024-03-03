import { storeToRefs } from 'pinia'

import { useFeedbackStore } from '@/stores/feedback'
import { useUserStore } from '@/stores/user'
import type { IComment, IReply } from '@/types'

export function addReplyToFeedback(commentId: string, commentMsg: string): IComment[] {
  const { feedback } = storeToRefs(useFeedbackStore())
  const { currentUser } = useUserStore()

  if (!feedback.value?.comments) return []

  const { comments = [] as IComment[] } = feedback.value

  return comments.map((comment) => {
    if (comment.id === commentId) {
      const reply: IReply = {
        id: Date.now().toString(),
        content: commentMsg,
        user: { ...currentUser },
        replyingTo: comment?.user.username ?? ''
      }

      comment.replies = comment.replies ? [...comment.replies, reply] : [reply]
    }

    return comment
  })
}
