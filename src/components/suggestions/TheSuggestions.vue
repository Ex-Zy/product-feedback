<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import TheSidebar from '@/components/suggestions/sidebar/TheSidebar.vue'
import SuggestionsHeader from '@/components/suggestions/main/SuggestionsHeader.vue'
import SuggestionsList from '@/components/suggestions/main/SuggestionsList.vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import SuggestionsEmpty from '@/components/suggestions/main/SuggestionsEmpty.vue'
import ConfettiExplosion from 'vue-confetti-explosion'
import { ref } from 'vue'

const { filteredSuggestions } = storeToRefs(useSuggestionsStore())

// confetti logic
const showConfetti = ref(false)
const duration = 3000
const { innerWidth: vW, innerHeight: vH } = window

async function handleUpVote() {
  showConfetti.value = true

  setTimeout(() => {
    showConfetti.value = false
  }, duration)
}
</script>

<template>
  <!-- Show Confetti after UpVote suggestion -->
  <div class="confetti" v-if="showConfetti">
    <ConfettiExplosion
      :force="0.1"
      :particleCount="50"
      :particleSize="10"
      :duration="duration"
      :stageWidth="vW"
      :stageHeight="vH"
    />
  </div>
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

<style lang="scss" scoped>
.confetti {
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 100;
}
</style>
