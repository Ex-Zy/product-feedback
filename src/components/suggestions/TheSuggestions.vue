<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import TheSidebar from '@/components/suggestions/sidebar/TheSidebar.vue'
import SuggestionsHeader from '@/components/suggestions/main/SuggestionsHeader.vue'
import SuggestionsList from '@/components/suggestions/main/SuggestionsList.vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import SuggestionsEmpty from '@/components/suggestions/main/SuggestionsEmpty.vue'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const { suggestions } = storeToRefs(useSuggestionsStore())

const { loadCurrentUserToStore } = useUserStore()
const { loadSuggestionsPageDataToStore } = useSuggestionsStore()

onMounted(() => {
  loadCurrentUserToStore()
  loadSuggestionsPageDataToStore()
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
          <SuggestionsList v-if="suggestions.length" />
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
