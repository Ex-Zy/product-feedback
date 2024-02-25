import type { IComment, IReply } from '@/types'
import type { Ref } from 'vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useFeedbackStore } from '@/stores/feedback'

export const useComment = (
  type: Ref<'comment' | 'reply'>,
  comment: Ref<IComment>,
  reply: Ref<IReply | undefined>
) => {
  const isComment = computed(() => type.value === 'comment')
  const isReply = computed(() => type.value === 'reply')

  // comment replies amount
  const repliesAmount = computed(() => {
    const replies = comment.value.replies
    return isReply.value || !replies ? 0 : replies.length
  })

  // data for comment or reply
  const user = computed(() => (reply.value ? reply.value.user : comment.value.user))
  const content = computed(() => (reply.value ? reply.value.content : comment.value.content))

  // show/hide Reply button and AddReply form
  const { currentUser } = storeToRefs(useUserStore())
  const { openReplyId } = storeToRefs(useFeedbackStore())
  const showReplyBtn = computed(() => {
    return currentUser.value.username !== user.value.username
  })
  const showAddReply = computed(() => {
    return openReplyId.value === (reply.value ? reply.value.id : comment.value.id)
  })

  return {
    showReplyBtn,
    showAddReply,
    user,
    content,
    repliesAmount,
    isComment,
    isReply
  }
}
