<script setup lang="ts">
import CommentsItem from '@/components/feedbackDetail/comments/CommentsItem.vue'
import type { IComment, IReply } from '@/types'
import { computed } from 'vue'
import PostReply from '@/components/feedbackDetail/comments/PostReply.vue'
import UserProfile from '@/components/feedbackDetail/comments/UserProfile.vue'
import { useScrollToLastComment } from '@/composables/comments/useScrollToLastComment'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useFeedbackStore } from '@/stores/feedback'

interface Props {
  type: 'comment' | 'reply'
  comment: IComment & IReply
  parentCommentId: number
}
const props = defineProps<Props>()

// scroll to last comment
const repliesAmount = computed(() => props.comment.replies?.length ?? 0)
const { commentRef } = useScrollToLastComment(repliesAmount)

const rootClasses = computed(() => ({
  'is-replies-open': !!props.comment.replies?.length
}))

// Add Reply
const { currentUser } = storeToRefs(useUserStore())
const { openReplyId } = storeToRefs(useFeedbackStore())

const showReplyBtn = computed(() => {
  return currentUser.value.username !== props.comment.user.username
})
const showPostReply = computed(() => {
  if (props.type === 'reply') {
    return openReplyId.value === props.comment.id
  }
  return openReplyId.value === props.parentCommentId
})
const { toggleReply, submitReply } = useFeedbackStore()

function handleSubmitReply(commentMsg: string) {
  submitReply(props.parentCommentId, commentMsg)
}
</script>

<template>
  <div class="comment-outer" :class="rootClasses">
    <div class="comment">
      <div class="comment__header">
        <UserProfile :user="comment.user" />
        <span
          v-if="showReplyBtn"
          class="reply-btn"
          @click="toggleReply(parentCommentId, comment.id)"
          >Reply</span
        >
      </div>
      <div class="comment__body">
        <div class="comment__content b2">
          <span v-if="comment.replyingTo" class="replying-to"> @{{ comment.replyingTo }} </span>
          {{ comment.content }}
        </div>
        <PostReply v-if="showPostReply" @submit="handleSubmitReply" />
      </div>
    </div>
    <div v-if="repliesAmount" class="comment-replies">
      <template v-for="item in comment.replies" :key="item.id">
        <CommentsItem
          ref="commentRef"
          type="reply"
          :comment="item"
          :parent-comment-id="comment.id"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-outer {
  --avatar-size: 40px;
  --gap: 32px;
  --offset: 6px;

  margin-top: var(--gap);
  position: relative;

  @include mobile {
    --gap: 16px;
  }

  &.is-replies-open {
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: calc(var(--avatar-size) + var(--gap) * 0.5 + var(--offset));
      left: calc(var(--avatar-size) * 0.5);
      bottom: 0;
      opacity: 0.1;
      background: var(--color-8);
      width: 1px;

      @include mobile {
        display: none;
      }
    }
  }
}

.comment {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__body {
    margin-top: calc(var(--gap) * 0.5);
    padding-left: calc(var(--avatar-size) + var(--gap));
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--gap) * 0.75);

    @include mobile {
      padding: 0;
    }
  }

  &__content {
    overflow-wrap: break-word;
  }
}

.reply-btn {
  color: var(--color-2);
  font:
    600 13px/1.2 'Jost',
    sans-serif;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.comment-replies {
  padding-left: var(--avatar-size);
  position: relative;

  @include mobile {
    padding-left: calc(var(--avatar-size) * 0.5);

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      opacity: 0.1;
      background: var(--color-8);
      width: 1px;
    }
  }

  &:deep(.comment-outer) {
    &:last-child:before {
      content: '';
      display: block;
      position: absolute;
      top: calc(var(--avatar-size) * 0.5);
      left: calc(var(--avatar-size) * 0.5 * -1);
      bottom: 0;
      background: var(--color-4);
      width: 1px;
    }
  }
}

.replying-to {
  font-weight: 700;
  color: var(--color-1);
}
</style>
