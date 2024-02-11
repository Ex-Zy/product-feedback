<script setup lang="ts">
import ConfettiExplosion from 'vue-confetti-explosion'
import { useConfetti } from '@/composables/useConfetti'

const { show, duration, vW, vH } = useConfetti()
</script>

<template>
  <div class="confetti" v-if="show">
    <ConfettiExplosion
      :force="0.1"
      :particleCount="50"
      :particleSize="10"
      :duration="duration"
      :stageWidth="vW"
      :stageHeight="vH"
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
}
</style>
