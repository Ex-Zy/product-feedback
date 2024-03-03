<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import ConfettiExplosion from 'vue-confetti-explosion'

import { useConfetti } from '@/composables/useConfetti'

const { show, duration } = useConfetti()
const { width, height } = useWindowSize()
</script>

<template>
  <div class="confetti" v-if="show">
    <ConfettiExplosion
      :force="0.1"
      :particleCount="50"
      :particleSize="10"
      :duration="duration"
      :stageWidth="width"
      :stageHeight="height"
    />
  </div>
</template>

<style scoped lang="scss">
.confetti {
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: none;
}
</style>
