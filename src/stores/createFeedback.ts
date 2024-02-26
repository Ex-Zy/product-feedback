import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import type { InputSuggestion, ISuggestion } from '@/types'
import { useSuggestionsStore } from '@/stores/suggestions'

type CreateFeedbackReturnType = Promise<ISuggestion | undefined>

export const useCreateFeedbackStore = defineStore('createFeedback', () => {
  const { suggestions } = storeToRefs(useSuggestionsStore())

  const loader = ref(false)
  const error = ref<string | null>(null)

  function transformToValidFeedback(newFeedback: InputSuggestion): ISuggestion {
    return Object.assign(
      {
        id: Date.now(),
        upvotes: 0,
        isUpvoted: false,
        status: 'suggestion'
      },
      newFeedback
    )
  }

  async function createNewFeedback(
    newFeedback: InputSuggestion,
    delay = 600
  ): CreateFeedbackReturnType {
    loader.value = true
    try {
      const feedback = transformToValidFeedback(newFeedback)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          suggestions.value.unshift(feedback)
          resolve(feedback)
        }, delay)
      })
    } catch (err) {
      error.value = 'Something went wrong'
      console.log(err)
    } finally {
      loader.value = false
    }
  }

  return {
    loader,
    error,
    createNewFeedback
  }
})
