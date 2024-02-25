<script setup lang="ts">
import CommentsItem from '@/components/feedbackDetail/comments/CommentsItem.vue'
import type { IComment, IReply } from '@/types'
import { computed, toRefs } from 'vue'
import AddReply from '@/components/feedbackDetail/comments/AddReply.vue'
import UserProfile from '@/components/feedbackDetail/comments/UserProfile.vue'
import { useScrollToLastComment } from '@/composables/comments/useScrollToLastComment'
import { useFeedbackStore } from '@/stores/feedback'
import { useComment } from '@/composables/comments/useComment'

interface Props {
  type: 'comment' | 'reply'
  comment: IComment
  reply?: IReply
}
const props = defineProps<Props>()
const { type, comment, reply } = toRefs(props)

const { isComment, user, content, repliesAmount, showAddReply, showReplyBtn } = useComment(
  type,
  comment,
  reply
)

// For better UX - scroll to last comment
const { commentRef } = useScrollToLastComment(repliesAmount)

// submit reply
const { toggleReply, submitReply } = useFeedbackStore()

function handleSubmitReply(commentMsg: string) {
  submitReply(props.comment.id, commentMsg)
}
</script>

<template>
  <div class="comment-outer" :class="{ 'is-replies-open': !!(isComment && repliesAmount) }">
    <div class="comment">
      <div class="comment__header">
        <UserProfile :user="user" />
        <span v-if="showReplyBtn" class="reply-btn" @click="toggleReply(reply?.id ?? comment.id)"
          >Reply</span
        >
      </div>
      <div class="comment__body">
        <div class="comment__content b2">
          <span v-if="reply" class="replying-to"> @{{ reply.replyingTo }} </span>
          {{ content }}
        </div>
        <AddReply v-if="showAddReply" @submit="handleSubmitReply" />
      </div>
    </div>
    <div v-if="isComment && comment.replies" class="comment-replies">
      <template v-for="item in comment.replies" :key="item.id">
        <CommentsItem ref="commentRef" type="reply" :comment="comment" :reply="item" />
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
