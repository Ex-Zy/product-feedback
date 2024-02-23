<script setup lang="ts">
import CommentsItem from '@/components/feedbackDetail/comments/CommentsItem.vue'
import type { IReply, IUser } from '@/types'
import { computed } from 'vue'
import PostReply from '@/components/feedbackDetail/comments/PostReply.vue'
import UserProfile from '@/components/feedbackDetail/comments/UserProfile.vue'
import { useScrollToLastComment } from '@/composables/comments/useScrollToLastComment'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useFeedbackStore } from '@/stores/feedback'

interface Props {
  commentId: number
  commentReplyId?: number
  content: string
  user: IUser
  type: 'comment' | 'reply'
  replies?: IReply[]
  replyingTo?: string
}
const props = defineProps<Props>()

const rootClasses = computed(() => ({
  'is-replies-open': !!props.replies?.length
}))

// scroll to last comment
const commentsAmount = computed(() => props.replies?.length ?? 0)
const { commentRef } = useScrollToLastComment(commentsAmount)

// Add Reply
const { currentUser } = storeToRefs(useUserStore())
const { openReplyId } = storeToRefs(useFeedbackStore())
const showReplyBtn = computed(() => currentUser.value.username !== props.user.username)
const showPostReply = computed(
  () => openReplyId.value === (props.commentReplyId ?? props.commentId)
)
const { toggleReply, submitReply } = useFeedbackStore()

function handleSubmitReply(commentMsg: string) {
  submitReply(props.commentId, commentMsg)
}
</script>

<template>
  <div class="comment-outer" :class="rootClasses">
    <div class="comment">
      <div class="comment__header">
        <UserProfile :user="props.user" />
        <span
          v-if="showReplyBtn"
          class="reply-btn"
          @click="toggleReply(props.commentId, props.commentReplyId)"
          >Reply</span
        >
      </div>
      <div class="comment__body">
        <div class="comment__content b2">
          <span v-if="props.replyingTo" class="replying-to"> @{{ props.replyingTo }} </span>
          {{ props.content }}
        </div>
        <PostReply v-if="showPostReply" @submit="handleSubmitReply" />
      </div>
    </div>
    <div v-if="!!props.replies?.length" class="comment-replies">
      <CommentsItem
        v-for="item in replies"
        ref="commentRef"
        :key="item.id"
        type="reply"
        :comment-id="props.commentId"
        :comment-reply-id="item.id"
        :user="item.user"
        :content="item.content"
        :replying-to="item.replyingTo"
      />
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