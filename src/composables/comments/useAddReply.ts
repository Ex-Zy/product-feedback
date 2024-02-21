import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useFeedbackStore } from '@/stores/feedback'
import type { IReply, IUser } from '@/types'
import { computed, type Ref } from 'vue'

export const useAddReply = (user: Ref<IUser>, commentId: Ref<number>, finalId: Ref<number>) => {
  const { currentUser } = storeToRefs(useUserStore())
  const { openReplyId } = storeToRefs(useFeedbackStore())
  const { setReplyToStore, setOpenReplyIdToStore } = useFeedbackStore()

  const showReplyBtn = computed(() => currentUser.value.username !== user.value.username)
  const showPostReply = computed(() => openReplyId.value === finalId.value)

  function togglePostReply() {
    const isSameReplyId = openReplyId.value === finalId.value
    setOpenReplyIdToStore(isSameReplyId ? null : finalId.value)
  }
  function hidePostReplyForm() {
    setOpenReplyIdToStore(null)
  }
  function handleSubmitReply(value: string) {
    const reply: IReply = {
      id: Date.now(),
      content: value,
      user: { ...currentUser.value },
      replyingTo: user.value.username
    }

    setReplyToStore(commentId.value, reply)

    hidePostReplyForm()
  }

  return {
    showReplyBtn,
    showPostReply,
    hidePostReplyForm,
    togglePostReply,
    handleSubmitReply
  }
}
