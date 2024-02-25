<script setup lang="ts">
import CommentsItem from '@/components/feedbackDetail/comments/CommentsItem.vue'
import { useScrollToLastComment } from '@/composables/comments/useScrollToLastComment'
import { storeToRefs } from 'pinia'
import { useFeedbackStore } from '@/stores/feedback'

const { comments, commentsAmount } = storeToRefs(useFeedbackStore())

// scroll to last comment
const { commentRef } = useScrollToLastComment(commentsAmount)
</script>

<template>
  <div class="comments-list">
    <div class="comments-list__title h3">{{ commentsAmount }} Comments</div>
    <div class="comments-list__content">
      <CommentsItem
        ref="commentRef"
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        type="comment"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.comments-list {
  background: var(--color-4);
  padding: 24px 32px 48px;
  border-radius: var(--radius-1);
}
</style>
