<script setup lang="ts">
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import CommentsThread from '@/components/feedbackDetail/comments/CommentsThread.vue'
import AddComment from '@/components/feedbackDetail/AddComment.vue'
import { storeToRefs } from 'pinia'
import { useFeedbackStore } from '@/stores/feedback'
import UIButton from '@/components/common/UIButton.vue'
import router from '@/router'
import IconArrowLeft from '@/components/common/icons/IconArrowLeft.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const { loadCurrentUserToStore } = useUserStore()
const { feedback, comments } = storeToRefs(useFeedbackStore())
const { upvoteFeedback, loadFeedbackToStore, $reset, submitComment } = useFeedbackStore()

onMounted(() => {
  loadCurrentUserToStore()
  loadFeedbackToStore()
})

onBeforeUnmount(() => {
  $reset()
})

function handleGoBack() {
  router.push('/')
}
</script>

<template>
  <div class="feedback-detail">
    <h1 v-if="!feedback" class="feedback-detail__empty h1">No feedback data to display</h1>
    <template v-else>
      <div class="feedback-detail__header">
        <UIButton type="light" text="Go Back" @click="handleGoBack">
          <IconArrowLeft />
        </UIButton>
        <UIButton type="secondary" text="Edit Feedback" />
      </div>
      <SuggestionsListItem :suggestion="feedback" @upvote="upvoteFeedback" />
      <CommentsThread v-if="comments?.length" />
      <AddComment @submit="submitComment" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.feedback-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__empty {
    text-align: center;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
