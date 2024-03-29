<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import AppLayout from '@/components/AppLayout.vue'
import SuggestionsSkeleton from '@/components/suggestions/main/skeleton/SuggestionsSkeleton.vue'
import SuggestionsEmpty from '@/components/suggestions/main/SuggestionsEmpty.vue'
import SuggestionsHeader from '@/components/suggestions/main/SuggestionsHeader.vue'
import SuggestionsList from '@/components/suggestions/main/SuggestionsList.vue'
import TheSidebar from '@/components/suggestions/sidebar/TheSidebar.vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import { useUserStore } from '@/stores/user'

const { suggestions, loader, error } = storeToRefs(useSuggestionsStore())

const { loadCurrentUserToStore } = useUserStore()
const { loadSuggestionsToStore } = useSuggestionsStore()

onMounted(() => {
  loadCurrentUserToStore()
  loadSuggestionsToStore({ filterBy: 'all' })
})
</script>

<template>
  <AppLayout>
    <template #sidebar>
      <TheSidebar />
    </template>
    <template #main>
      <main class="main">
        <SuggestionsHeader />
        <Transition name="fade" mode="out-in">
          <SuggestionsSkeleton v-if="loader || error" />
          <SuggestionsList v-else-if="suggestions.length" />
          <SuggestionsEmpty v-else />
        </Transition>
      </main>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped>
.main {
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: calc(72px + 32px); // header height + offset
    padding-bottom: 40px;
  }
}
</style>
