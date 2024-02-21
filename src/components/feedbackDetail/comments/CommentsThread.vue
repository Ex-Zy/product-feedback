<script setup lang="ts">
import type { IComment } from '@/types'
import CommentsItem from '@/components/feedbackDetail/comments/CommentsItem.vue'
import { computed } from 'vue'
import { useScrollToLastComment } from '@/composables/comments/useScrollToLastComment'

interface Props {
  comments: IComment[]
  commentsAmount: number
}
const props = defineProps<Props>()

// scroll to last comment
const commentsAmount = computed(() => props.comments.length)
const { commentRef } = useScrollToLastComment(commentsAmount)
</script>

<template>
  <div class="comments-list">
    <div class="comments-list__title h3">{{ props.commentsAmount }} Comments</div>
    <div class="comments-list__content">
      <CommentsItem
        ref="commentRef"
        v-for="comment in props.comments"
        :key="comment.id"
        :id="comment.id"
        :comment-id="comment.id"
        :content="comment.content"
        :user="comment.user"
        :replies="comment.replies"
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
