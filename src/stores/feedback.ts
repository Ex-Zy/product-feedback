import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toast-notification'

import { useConfetti } from '@/composables/useConfetti'
import { API_PRODUCTS } from '@/constants'
import { calculateComments } from '@/helpers'
import router from '@/router'
import { apiCreateFeedback } from '@/stores/utils/api/apiCreateFeedback'
import { apiDeleteFeedback } from '@/stores/utils/api/apiDeleteFeedback'
import { apiEditFeedback } from '@/stores/utils/api/apiEditFeedback'
import { apiUpvoteFeedback } from '@/stores/utils/api/apiUpvoteFeedback'
import { addCommentToFeedback } from '@/stores/utils/feedback/addCommentToFeedback'
import { addReplyToFeedback } from '@/stores/utils/feedback/addReplyToFeedback'
import { incrementUpvoteFeedback } from '@/stores/utils/feedback/incrementUpvoteFeedback'
import type { FeedbackReturnType, IComment, InputSuggestion, ISuggestion } from '@/types'

export const useFeedbackStore = defineStore('feedback', () => {
  const $toast = useToast()

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
      if (!isUpvoted) return

      const { id, upvotes } = incrementUpvoteFeedback(suggestion, isUpvoted)

      const response = await apiUpvoteFeedback(id, {
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
    loader.value = true
    try {
      const comments: IComment[] = addReplyToFeedback(commentId, commentMsg)
      if (!feedback.value) return

      feedback.value.comments = comments
      hideReplies()

      const editedFeedback = await apiEditFeedback(feedback.value)
      if (!editedFeedback) return

      $toast.success('Comment successfully added', {
        position: 'top',
        duration: 3000
      })

      return editedFeedback
    } catch (err) {
      console.log(err)
      $toast.error('Failed to create comment', {
        position: 'top',
        duration: 3000
      })
    } finally {
      loader.value = false
    }
  }

  async function submitComment(commentMsg: string): FeedbackReturnType {
    loader.value = true
    try {
      const comments: IComment[] = addCommentToFeedback(commentMsg)
      if (!feedback.value) return

      feedback.value.comments = comments

      const editedFeedback = await apiEditFeedback(feedback.value)
      if (!editedFeedback) return

      $toast.success('Comment successfully added', {
        position: 'top',
        duration: 3000
      })

      return editedFeedback
    } catch (err) {
      console.log(err)
      $toast.error('Failed to create comment', {
        position: 'top',
        duration: 3000
      })
    } finally {
      loader.value = false
    }
  }

  async function editFeedback(suggestion: ISuggestion): FeedbackReturnType {
    loader.value = true

    try {
      feedback.value = suggestion

      const editedFeedback = await apiEditFeedback(suggestion)

      if (!editedFeedback) return

      $toast.success('Feedback successfully edited', {
        position: 'top',
        duration: 3000,
        onDismiss: () => router.back()
      })

      return editedFeedback
    } catch (err) {
      console.log(err)
      $toast.error('Failed to edit feedback', {
        position: 'top',
        duration: 3000
      })
    } finally {
      loader.value = false
    }
  }

  async function deleteFeedback(suggestion: ISuggestion): FeedbackReturnType {
    loader.value = true

    try {
      const deletedFeedback = await apiDeleteFeedback(suggestion.id)

      if (!deletedFeedback) return

      $toast.success('Feedback successfully deleted', {
        position: 'top',
        duration: 3000,
        onDismiss: () => router.push('/')
      })

      return deletedFeedback
    } catch (err) {
      console.log(err)
      $toast.error('Failed to delete feedback', {
        position: 'top',
        duration: 3000
      })
    } finally {
      loader.value = false
    }
  }

  async function createNewFeedback(newSuggestion: InputSuggestion): FeedbackReturnType {
    loader.value = true

    try {
      const suggestion = await apiCreateFeedback(newSuggestion)

      if (!suggestion) return

      const $toast = useToast()
      $toast.success('Feedback successfully created', {
        position: 'top',
        duration: 3000,
        onDismiss: () => router.push('/')
      })

      return suggestion
    } catch (err) {
      console.log(err)
      $toast.error('Failed to create feedback', {
        position: 'top',
        duration: 3000
      })
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
