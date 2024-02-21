import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import type { IComment, IReply, ISuggestion } from '@/types'
import { calculateComments } from '@/helpers'

export const useFeedbackStore = defineStore('feedback', () => {
  const route = useRoute()
  const id = computed(() => Number(route.params.id))

  const openReplyId = ref<number | null>(null)

  const { getSuggestion } = useSuggestionsStore()
  const feedback = computed<ISuggestion | null>(() => getSuggestion(id.value))
  const comments = computed<IComment[] | null>(() => feedback.value?.comments ?? null)
  const commentsAmount = computed<number>(() =>
    comments.value ? calculateComments(comments.value) : 0
  )

  function setOpenReplyIdToStore(id: number | null) {
    openReplyId.value = id
  }
  function setReplyToStore(commentId: number, reply: IReply) {
    const { comments } = feedback.value!
    const comment = comments?.find((item) => item.id === commentId)

    if (comment) {
      comment.replies = comment.replies ? [...comment.replies, reply] : [reply]
    }
  }
  function setCommentToStore(newComment: IComment) {
    if (!feedback.value) return

    const suggestion = getSuggestion(feedback.value.id)

    if (suggestion) {
      const { comments } = suggestion
      suggestion.comments = comments ? [...comments, newComment] : [newComment]
    }
  }

  return {
    feedback,
    comments,
    commentsAmount,
    openReplyId,
    setReplyToStore,
    setOpenReplyIdToStore,
    setCommentToStore
  }
})
