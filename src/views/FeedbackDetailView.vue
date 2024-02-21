<script setup lang="ts">
import FeedbackDetail from '@/components/feedbackDetail/FeedbackDetail.vue'
</script>

<template>
  <div class="fd-view">
    <FeedbackDetail />
  </div>
</template>

<style scoped lang="scss">
.fd-view {
  max-width: 730px;
  margin-inline: auto;
  @include mobile {
    max-width: none;
    padding: 24px;
  }
}
</style>
