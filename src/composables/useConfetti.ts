import { nextTick, ref } from 'vue'

const show = ref(false)

export const useConfetti = () => {
  const duration = 3000
  const { innerWidth: vW, innerHeight: vH } = window

  let id: ReturnType<typeof setTimeout>
  async function showConfetti() {
    if (show.value) {
      show.value = false
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
    vW,
    vH,
    showConfetti
  }
}
