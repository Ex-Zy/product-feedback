import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'
import { computed } from 'vue'

import { useFeedbackStore } from '@/stores/feedback'
import { useUserStore } from '@/stores/user'
import type { IComment, IReply } from '@/types'

export const useComment = (
  type: Ref<'comment' | 'reply'>,
  comment: Ref<IComment>,
  reply: Ref<IReply | undefined>
) => {
  const { currentUser } = storeToRefs(useUserStore())
  const { isVisibleReply } = useFeedbackStore()

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

  const showReplyBtn = computed(() => {
    return currentUser.value.username !== user.value.username
  })
  const showAddReply = computed(() => isVisibleReply(reply.value?.id ?? comment.value.id))

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
