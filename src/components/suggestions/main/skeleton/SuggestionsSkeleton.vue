<script setup lang="ts">
import SuggestionsListItemSkeleton from '@/components/suggestions/main/skeleton/SuggestionsListItemSkeleton.vue'
</script>

<template>
  <ul class="skeleton-list">
    <SuggestionsListItemSkeleton v-for="n in 5" :key="n" />
  </ul>
</template>

<style scoped lang="scss">
.skeleton-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  list-style: none;

  @include mobile {
    padding-inline: 24px;
  }
}
</style>
