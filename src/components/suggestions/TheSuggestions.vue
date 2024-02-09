<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import TheSidebar from '@/components/suggestions/sidebar/TheSidebar.vue'
import SuggestionsHeader from '@/components/suggestions/main/SuggestionsHeader.vue'
import SuggestionsList from '@/components/suggestions/main/SuggestionsList.vue'
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import SuggestionsEmpty from '@/components/suggestions/main/SuggestionsEmpty.vue'

const { selectedSuggestion } = storeToRefs(useSuggestionsStore())
</script>

<template>
  <AppLayout>
    <template #sidebar>
      <TheSidebar />
    </template>
    <template #main>
      <main>
        <SuggestionsHeader />
        <Transition name="fade" mode="out-in">
          <SuggestionsEmpty v-if="!selectedSuggestion.length" />
          <SuggestionsList v-else />
        </Transition>
      </main>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
