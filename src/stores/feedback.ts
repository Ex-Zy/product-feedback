import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { computed, ref, toRef } from 'vue'
import type { FeedbackReturnType, IComment, InputSuggestion, IReply, ISuggestion } from '@/types'
import { calculateComments } from '@/helpers'
import { useConfetti } from '@/composables/useConfetti'
import { useUserStore } from '@/stores/user'
import { API_PRODUCTS } from '@/constants'
import { apiUpvoteFeedback } from '@/stores/utils/api/apiUpvoteFeedback'
import { apiDeleteFeedback } from '@/stores/utils/api/apiDeleteFeedback'
import router from '@/router'
import { apiEditFeedback } from '@/stores/utils/api/apiEditFeedback'
import { apiCreateFeedback } from '@/stores/utils/api/apiCreateFeedback'

export const useFeedbackStore = defineStore('feedback', () => {
  const loader = ref(true)
  const error = ref<string | null>(null)

  const feedback = ref<ISuggestion | null>(null)

  const comments = computed<IComment[] | null>(() => feedback.value?.comments ?? null)
  const commentsAmount = computed<number>(() =>
    comments.value ? calculateComments(comments.value) : 0
  )

  // show/hide Add Replies
  const visibleReplies = ref<number[]>([])
  function isVisibleReply(id: number) {
    return visibleReplies.value.includes(id)
  }
  function hideReplies() {
    visibleReplies.value.length = 0
  }
  function showReply(id: number) {
    visibleReplies.value.push(id)
  }
  function toggleReply(id: number) {
    if (isVisibleReply(id)) {
      hideReplies()
    } else {
      hideReplies()
      showReply(id)
    }
  }

  // Api call
  async function fetchFeedback(id: number): FeedbackReturnType {
    loader.value = true

    try {
      const promiseResponse: Response = await fetch(`${API_PRODUCTS}/${id}`)
      return (await promiseResponse.json()) as ISuggestion
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

  async function upvoteFeedback(suggestion: ISuggestion, isUpvoted: boolean): FeedbackReturnType {
    try {
      const fb = toRef(suggestion)

      if (!isUpvoted || !fb.value) return

      const upvotes = suggestion.upvotes + 1

      fb.value.isUpvoted = isUpvoted
      fb.value.upvotes = upvotes

      const response = await apiUpvoteFeedback(suggestion.id, {
        isUpvoted,
        upvotes
      })

      const { showConfetti } = useConfetti()
      await showConfetti()

      return response
    } catch (err) {
      error.value = 'Something went wrong'
      console.log(err)
    }
  }

  function $reset() {
    loader.value = true
    error.value = null
    feedback.value = null
    hideReplies()
  }

  async function submitReply(commentId: number, commentMsg: string): FeedbackReturnType {
    const { currentUser } = useUserStore()
    const comment = feedback.value?.comments?.find((item) => item.id === commentId)

    if (!comment) return

    const reply: IReply = {
      id: Date.now(),
      content: commentMsg,
      user: { ...currentUser },
      replyingTo: comment?.user.username ?? ''
    }

    comment.replies = comment.replies ? [...comment.replies, reply] : [reply]
    hideReplies()

    return await apiEditFeedback(feedback.value!)
  }

  async function submitComment(commentMsg: string): FeedbackReturnType {
    loader.value = true
    try {
      if (!feedback.value) return

      const { currentUser } = useUserStore()
      const { comments } = feedback.value
      const newComment: IComment = {
        id: Date.now(),
        content: commentMsg,
        user: { ...currentUser }
      }

      feedback.value.comments = comments ? [...comments, newComment] : [newComment]

      return await apiEditFeedback(feedback.value)
    } catch (err) {
      error.value = `Something went wrong`
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  async function editFeedback(suggestion: ISuggestion): FeedbackReturnType {
    loader.value = true

    try {
      feedback.value = suggestion

      // TODO - add toast or modal for success edit
      setTimeout(() => router.back(), 100)

      return await apiEditFeedback(suggestion)
    } catch (err) {
      error.value = `Something went wrong`
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  async function deleteFeedback(suggestion: ISuggestion): FeedbackReturnType {
    loader.value = true

    try {
      const deletedFeedback = await apiDeleteFeedback(suggestion.id)

      if (!deletedFeedback) return

      // TODO - add toast or modal for success delete
      setTimeout(() => router.push('/'), 100)
      return deletedFeedback
    } catch (err) {
      error.value = `Something went wrong`
    } finally {
      loader.value = false
    }
  }

  async function createNewFeedback(newSuggestion: InputSuggestion): FeedbackReturnType {
    loader.value = true

    try {
      const suggestion = await apiCreateFeedback(newSuggestion)

      if (!suggestion) return

      // TODO - add toast or modal for success create
      setTimeout(() => router.push('/'), 100)
      return suggestion
    } catch (err) {
      error.value = `Something went wrong`
    } finally {
      loader.value = false
    }
  }

  return {
    loader,
    error,

    feedback,
    comments,
    commentsAmount,

    visibleReplies,
    isVisibleReply,
    showReply,
    hideReplies,
    toggleReply,

    fetchFeedback,
    loadFeedbackToStore,
    upvoteFeedback,
    $reset,
    submitReply,
    submitComment,
    editFeedback,
    deleteFeedback,
    createNewFeedback
  }
})
