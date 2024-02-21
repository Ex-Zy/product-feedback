import { type ComputedRef, nextTick, shallowRef, watch } from 'vue'

export const useScrollToLastComment = (commentsAmount: ComputedRef<number>) => {
  // array of comments ref
  const commentRef = shallowRef()

  watch(commentsAmount, handleUpdateCommentsAmount)

  async function handleUpdateCommentsAmount(newLen: number, oldLen: number) {
    const isCommentsAmountChange = newLen !== oldLen
    if (isCommentsAmountChange) {
      await scrollToLastComment()
    }
  }

  async function scrollToLastComment() {
    // wait update dom
    await nextTick()

    const lastComment = commentRef.value.at(-1).$el

    lastComment?.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    commentRef
  }
}
