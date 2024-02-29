import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useFeedbackStore } from '@/stores/feedback'
import type { IComment, IReply } from '@/types'

export function addReplyToFeedback(commentId: number, commentMsg: string): IComment[] {
  const { feedback } = storeToRefs(useFeedbackStore())
  const { currentUser } = useUserStore()

  if (!feedback.value?.comments) return []

  const { comments = [] as IComment[] } = feedback.value

  return comments.map((comment) => {
    if (comment.id === commentId) {
      const reply: IReply = {
        id: Date.now(),
        content: commentMsg,
        user: { ...currentUser },
        replyingTo: comment?.user.username ?? ''
      }

      comment.replies = comment.replies ? [...comment.replies, reply] : [reply]
    }

    return comment
  })
}
