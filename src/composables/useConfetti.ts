import { nextTick, ref } from 'vue'

const show = ref(false)

export const useConfetti = () => {
  const duration = 3000

  let id: ReturnType<typeof setTimeout>
  async function showConfetti() {
    // reset old confetti
    if (show.value) {
      show.value = false
      clearTimeout(id)
      await nextTick()
    }

    show.value = true

    id = setTimeout(() => {
      show.value = false
    }, duration)
  }

  return {
    show,
    duration,
    showConfetti
  }
}
