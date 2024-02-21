import { computed, ref, watch } from 'vue'

export const usePostMessage = () => {
  const CHARACTERS_LENGTH = 250

  const commentMsg = ref('')

  const quantity = computed<number>(() => {
    const charactersLen = commentMsg.value.length
    const charactersLeft = CHARACTERS_LENGTH - charactersLen

    return charactersLeft > 0 ? charactersLeft : 0
  })

  watch(commentMsg, updateTextAreaValue)

  function updateTextAreaValue(newVal: string) {
    commentMsg.value = newVal.trimStart().substring(0, CHARACTERS_LENGTH)
  }

  function clearTextArea() {
    commentMsg.value = ''
  }

  return {
    commentMsg,
    quantity,
    updateTextAreaValue,
    clearTextArea
  }
}
