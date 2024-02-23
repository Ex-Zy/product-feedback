<script setup lang="ts">
import CommentsItemSkeleton from '@/components/feedbackDetail/comments/skeleton/CommentsItemSkeleton.vue'
</script>

<template>
  <div class="comments-skeleton">
    <div class="comments-skeleton__title h3" />
    <div class="comments-skeleton__content">
      <CommentsItemSkeleton v-for="n in 3" :key="n" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.comments-skeleton {
  background: var(--color-4);
  padding: 24px 32px 48px;
  border-radius: var(--radius-1);

  box-shadow: 0 2px 10px -12px rgba(0, 0, 0, 0.44);
  border: 3px solid #f2f4ff;
  animation: pulse-bg 1s infinite;

  &__title {
    width: 102px;
    height: 26px;
    border-radius: var(--radius-1);
    background: #e8eafd;

    @include mobile {
      width: 74px;
      height: 19px;
    }
  }
}

@keyframes pulse-bg {
  0% {
    background-color: var(--color-4);
  }
  50% {
    background-color: var(--color-5);
  }
  100% {
    background-color: var(--color-4);
  }
}
</style>
