<script setup lang="ts">
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import CommentsThread from '@/components/feedbackDetail/comments/CommentsThread.vue'
import AddComment from '@/components/feedbackDetail/AddComment.vue'
import { storeToRefs } from 'pinia'
import { useFeedbackStore } from '@/stores/feedback'
import UIButton from '@/components/common/UIButton.vue'
import router from '@/router'
import IconArrowLeft from '@/components/common/icons/IconArrowLeft.vue'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import SuggestionsListItemSkeleton from '@/components/suggestions/main/skeleton/SuggestionsListItemSkeleton.vue'
import CommentsThreadSkeleton from '@/components/feedbackDetail/comments/skeleton/CommentsThreadSkeleton.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { loadCurrentUserToStore } = useUserStore()
const { feedback, comments, loader, error } = storeToRefs(useFeedbackStore())
const { upvoteFeedback, loadFeedbackToStore, $reset, submitComment } = useFeedbackStore()

onMounted(() => {
  loadCurrentUserToStore()
  loadFeedbackToStore()
})

onBeforeUnmount(() => {
  $reset()
})

function handleGoBack() {
  router.back()
}

function redirectToEdit() {
  router.push(`/edit/${id.value}`)
}
</script>

<template>
  <div class="feedback-detail">
    <div class="feedback-detail__header">
      <UIButton type="light" text="Go Back" @click="handleGoBack">
        <IconArrowLeft />
      </UIButton>
      <UIButton type="secondary" text="Edit Feedback" @click="redirectToEdit" />
    </div>
    <template v-if="loader || error">
      <SuggestionsListItemSkeleton />
      <CommentsThreadSkeleton />
    </template>
    <template v-else-if="feedback">
      <SuggestionsListItem :suggestion="feedback" @upvote="upvoteFeedback" />
      <CommentsThread v-if="comments?.length" />
    </template>
    <AddComment @submit="submitComment" />
  </div>
</template>

<style scoped lang="scss">
.feedback-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
