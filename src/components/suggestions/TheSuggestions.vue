<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import TheSidebar from '@/components/suggestions/sidebar/TheSidebar.vue'
import SuggestionsHeader from '@/components/suggestions/main/SuggestionsHeader.vue'
import SuggestionsList from '@/components/suggestions/main/SuggestionsList.vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import SuggestionsEmpty from '@/components/suggestions/main/SuggestionsEmpty.vue'
import ConfettiExplosion from 'vue-confetti-explosion'
import { nextTick, ref } from 'vue'

const { filteredSuggestions } = storeToRefs(useSuggestionsStore())

// confetti logic
const showConfetti = ref(false)
let timerId: ReturnType<typeof setTimeout>

async function handleUpVote() {
  // reset old confetti state
  if (showConfetti.value) {
    showConfetti.value = false
    clearTimeout(timerId)
    await nextTick()
  }

  showConfetti.value = true

  timerId = setTimeout(() => {
    showConfetti.value = false
  }, 10000)
}
</script>

<template>
  <!-- Show Confetti after UpVote suggestion -->
  <ConfettiExplosion v-if="showConfetti" :particleCount="100" />
  <AppLayout>
    <template #sidebar>
      <TheSidebar />
    </template>
    <template #main>
      <main>
        <SuggestionsHeader />
        <Transition name="fade" mode="out-in">
          <SuggestionsEmpty v-if="!filteredSuggestions.length" />
          <SuggestionsList v-else @upvote="handleUpVote" />
        </Transition>
      </main>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
