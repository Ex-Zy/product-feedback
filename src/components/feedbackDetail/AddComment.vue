<script setup lang="ts">
import UIButton from '@/components/common/UIButton.vue'
import { usePostMessage } from '@/composables/comments/usePostMessage'

interface Emit {
  (e: 'submit', value: string): void
}

const emit = defineEmits<Emit>()

const { commentMsg, quantity, clearTextArea } = usePostMessage()

function handleSubmitComment() {
  const trimmedComment = commentMsg.value.trim()

  if (!trimmedComment.length) {
    return
  }

  emit('submit', trimmedComment)
  setTimeout(clearTextArea, 300)
}
</script>

<template>
  <div class="add-comment">
    <h2 class="add-comment__title h3">Add Comment</h2>
    <textarea
      class="add-comment__area"
      placeholder="Type your comment here"
      v-model="commentMsg"
      @keyup.enter="handleSubmitComment"
    />
    <div class="add-comment__footer">
      <span class="add-comment__characters b2">{{ `${quantity} Characters left` }}</span>
      <UIButton text="Post Reply" @click="handleSubmitComment" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.add-comment {
  position: relative;
  background: var(--color-4);
  padding: 24px 32px 48px;
  border-radius: var(--radius-1);
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  &__title {
    margin-bottom: 8px;
  }

  &__area {
    flex-grow: 1;
    height: 80px;
    padding-block: 16px;
    padding-inline: 24px;
    resize: none;
    border-radius: var(--radius-2);
    background: var(--color-6);
    border: 1px solid var(--color-6);
    outline: none;

    font:
      15px/1.2 'Jost',
      sans-serif;
    color: var(--color-7);

    @include mobile {
      font-size: 13px;
      padding: 16px;
    }

    &:focus {
      border: 1px solid var(--color-2);
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
