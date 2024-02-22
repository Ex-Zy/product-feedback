<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import TheConfetti from '@/components/suggestions/TheConfetti.vue'
import { useUserStore } from '@/stores/user'

const { loadCurrentUserToStore } = useUserStore()

onMounted(() => {
  loadCurrentUserToStore()
})
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
