<script setup lang="ts">
import { RouterView } from 'vue-router'
import jsonData from './data/data.json'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import type { ISuggestion } from '@/types'
import TheConfetti from '@/components/suggestions/TheConfetti.vue'

const { setCurrentUser } = useUserStore()
const { setSuggestionsToStore } = useSuggestionsStore()

onMounted(() => {
  setAppDataIntoStore()
})

function setAppDataIntoStore() {
  setCurrentUser(jsonData.currentUser)
  setSuggestionsToStore(jsonData.productRequests as ISuggestion[])
}
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
