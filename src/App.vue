<script setup lang="ts">
import { RouterView } from 'vue-router'

import TheConfetti from '@/components/common/TheConfetti.vue'
</script>

<template>
  <TheConfetti />
  <RouterView />
</template>

<style lang="scss">
#app {
  background: var(--color-6);
  padding: 40px;
  min-height: 100vh;

  @include mobile {
    padding: 0;
  }
}
</style>
