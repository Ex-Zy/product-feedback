<script setup lang="ts">
import UIButton from '@/components/common/UIButton.vue'
import { usePostMessage } from '@/composables/comments/usePostMessage'
import { useFocusToCommentForm } from '@/composables/comments/useFocusToCommentForm'

interface Emit {
  (e: 'submit', value: string): void
}

const emit = defineEmits<Emit>()

const { commentMsg, clearTextArea } = usePostMessage()
const { textAreaRef, hiddenDivRef, focusEl } = useFocusToCommentForm()

function handleSubmitReply() {
  const trimmedComment = commentMsg.value.trim()

  if (!trimmedComment.length) {
    focusEl()
    return
  }

  emit('submit', trimmedComment)
  setTimeout(clearTextArea, 300)
}
</script>

<template>
  <div class="post-reply">
    <div ref="hiddenDivRef" class="hidden-el" />
    <textarea
      ref="textAreaRef"
      class="post-reply__area"
      placeholder="Type your reply here"
      v-model="commentMsg"
      @keyup.enter="handleSubmitReply"
    />
    <UIButton text="Post Reply" @click="handleSubmitReply" />
  </div>
</template>

<style scoped lang="scss">
.hidden-el {
  visibility: hidden;
  opacity: 0;
  height: 16px;
  width: 100%;
  position: absolute;
  top: -16px;
}

.post-reply {
  position: relative;
  display: flex;
  align-items: flex-start;
  column-gap: 16px;

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

    &:focus {
      border: 1px solid var(--color-2);
    }
  }
}
</style>
