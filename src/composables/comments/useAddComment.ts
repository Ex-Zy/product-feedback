import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useFeedbackStore } from '@/stores/feedback'
import { usePostMessage } from '@/composables/comments/usePostMessage'
import type { IComment } from '@/types'

export const useAddComment = () => {
  const { currentUser } = storeToRefs(useUserStore())
  const { setCommentToStore } = useFeedbackStore()

  const { commentMsg, quantity, clearTextArea } = usePostMessage()

  function handleSubmitComment() {
    const msg = commentMsg.value.trim()

    if (!msg.length) return

    const comment: IComment = {
      id: Date.now(),
      content: msg,
      user: { ...currentUser.value }
    }

    setCommentToStore(comment)
    clearTextArea()
  }

  return {
    commentMsg,
    quantity,
    handleSubmitComment
  }
}
