import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { computed, ref, toRef } from 'vue'
import type { IComment, IReply, ISuggestion } from '@/types'
import { calculateComments } from '@/helpers'
import { productRequests } from '@/data/data.json'
import { useConfetti } from '@/composables/useConfetti'
import { useUserStore } from '@/stores/user'

type FeedbackReturnType = Promise<ISuggestion | undefined>

export const useFeedbackStore = defineStore('feedback', () => {
  const loader = ref(true)
  const error = ref<string | null>(null)

  const feedback = ref<ISuggestion | null>(null)
  const openReplyId = ref<number | null>(null)

  const comments = computed<IComment[] | null>(() => feedback.value?.comments ?? null)
  const commentsAmount = computed<number>(() =>
    comments.value ? calculateComments(comments.value) : 0
  )

  // Api call
  async function fetchFeedback(id: number, delay = 600): FeedbackReturnType {
    loader.value = true

    try {
      const responsePromise = new Promise<ISuggestion>((resolve, reject) => {
        const suggestion = productRequests.find((suggestion) => suggestion.id === id)
        setTimeout(resolve, delay, suggestion)
      })

      return await responsePromise
    } catch (err) {
      error.value = 'Failed to load feedback'
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  async function loadFeedbackToStore() {
    const id = Number(useRoute().params.id)
    const responseFeedback = await fetchFeedback(id)

    if (responseFeedback) {
      feedback.value = responseFeedback
    }
  }

  async function upvoteFeedback(suggestion: ISuggestion, isUpvoted: boolean) {
    const fb = toRef(suggestion)

    if (!isUpvoted || !fb.value) return

    fb.value.isUpvoted = isUpvoted
    fb.value.upvotes++

    const { showConfetti } = useConfetti()
    await showConfetti()
  }

  function $reset() {
    loader.value = true
    error.value = null
    feedback.value = null
    openReplyId.value = null
  }

  function toggleReply(commentId: number, replyId?: number) {
    const id = replyId ?? commentId
    const isSameReply = openReplyId.value === id

    openReplyId.value = isSameReply ? null : id
  }

  function submitReply(commentId: number, commentMsg: string) {
    const { currentUser } = useUserStore()
    const comment = feedback.value?.comments?.find((item) => item.id === commentId)

    if (comment) {
      const reply: IReply = {
        id: Date.now(),
        content: commentMsg,
        user: { ...currentUser },
        replyingTo: comment?.user.username ?? ''
      }

      comment.replies = comment.replies ? [...comment.replies, reply] : [reply]
      openReplyId.value = null
    }
  }

  function submitComment(commentMsg: string) {
    if (!feedback.value) return

    const { currentUser } = useUserStore()
    const { comments } = feedback.value
    const newComment: IComment = {
      id: Date.now(),
      content: commentMsg,
      user: { ...currentUser }
    }

    feedback.value.comments = comments ? [...comments, newComment] : [newComment]
  }

  return {
    loader,
    error,

    feedback,
    comments,
    commentsAmount,
    openReplyId,

    fetchFeedback,
    loadFeedbackToStore,
    upvoteFeedback,
    $reset,
    toggleReply,
    submitReply,
    submitComment
  }
})
