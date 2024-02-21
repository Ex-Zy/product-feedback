import { onMounted, ref } from 'vue'

export const useFocusToCommentForm = () => {
  const textAreaRef = ref()
  const hiddenDivRef = ref()

  onMounted(() => {
    scrollToTop()
    focusEl()
  })

  function focusEl() {
    textAreaRef.value.focus()
  }

  function scrollToTop() {
    hiddenDivRef.value.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    textAreaRef,
    hiddenDivRef,
    focusEl,
    scrollToTop
  }
}
