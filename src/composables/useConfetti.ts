import { ref } from 'vue'

const show = ref(false)

export const useConfetti = () => {
  const duration = 3000
  const { innerWidth: vW, innerHeight: vH } = window
  function showConfetti() {
    show.value = true

    setTimeout(() => {
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
