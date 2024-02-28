<script setup lang="ts">
import FeedbackLayout from '@/components/FeedbackLayout.vue'
import FeedbackCard from '@/components/common/FeedbackCard.vue'
import { useFeedbackStore } from '@/stores/feedback'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watchEffect } from 'vue'
import type { ISuggestion } from '@/types'
import { CATEGORIES } from '@/constants'
import { useStatuses } from '@/stores/statuses'
import UIButton from '@/components/common/UIButton.vue'
import UIInput from '@/components/common/UIInput.vue'
import UITextArea from '@/components/common/UITextArea.vue'
import UISelect from '@/components/common/UISelect.vue'
import IconEditFeedback from '@/components/common/icons/IconEditFeedback.vue'
import { deepEqual } from '@/helpers'
import router from '@/router'

// initial data
const { feedback } = storeToRefs(useFeedbackStore())
const { loadFeedbackToStore, editFeedback, deleteFeedback } = useFeedbackStore()

onMounted(() => {
  loadFeedbackToStore()
})

// store local feedback
const editedFeedback = ref<ISuggestion | null>(null)

function saveLocalFeedback(feedback: ISuggestion) {
  editedFeedback.value = { ...feedback }
}

watchEffect(() => {
  feedback.value && saveLocalFeedback(feedback.value)
})

// statuses
const { statuses } = storeToRefs(useStatuses())

function handleCancelFeedback(feedback: ISuggestion) {
  const isFeedbackNotChanges = deepEqual(feedback, editedFeedback.value!)

  if (isFeedbackNotChanges) {
    router.back()
    return
  }

  editedFeedback.value = { ...feedback }
}
</script>

<template>
  <FeedbackLayout>
    <FeedbackCard v-if="feedback && editedFeedback" class="edit-feedback">
      <template #icon><IconEditFeedback /></template>
      <template #title>
        <h1 class="h1">Editing `{{ feedback.title }}`</h1>
      </template>
      <template #content>
        <UIInput
          v-model="editedFeedback.title"
          title="Feedback Title"
          description="Add a short, descriptive headline"
        />
        <UISelect
          v-model="editedFeedback.category"
          title="Category"
          description="Choose a category for your feedback"
          :options="CATEGORIES"
        />
        <UISelect
          v-model="editedFeedback.status"
          title="Update Status"
          description="Change feedback state"
          :options="statuses"
        />
        <UITextArea
          title="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
          v-model="editedFeedback.description"
        />
      </template>
      <template #footer>
        <UIButton
          type="danger"
          text="Delete"
          class="delete-btn"
          @click="deleteFeedback(feedback)"
        />
        <UIButton type="terminate" text="Cancel" @click="handleCancelFeedback(feedback)" />
        <UIButton text="Add Feedback" @click="editFeedback(editedFeedback)" />
      </template>
    </FeedbackCard>
  </FeedbackLayout>
</template>

<style scoped lang="scss">
.delete-btn {
  margin-right: auto;
}
</style>
