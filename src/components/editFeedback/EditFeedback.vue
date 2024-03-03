<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted, ref, watchEffect } from 'vue'

import FeedbackCard from '@/components/common/FeedbackCard.vue'
import IconEditFeedback from '@/components/common/icons/IconEditFeedback.vue'
import UIButton from '@/components/common/UIButton.vue'
import UIInput from '@/components/common/UIInput.vue'
import UISelect from '@/components/common/UISelect.vue'
import UITextArea from '@/components/common/UITextArea.vue'
import FeedbackLayout from '@/components/FeedbackLayout.vue'
import { CATEGORIES } from '@/constants'
import { deepEqual } from '@/helpers'
import router from '@/router'
import { useFeedbackStore } from '@/stores/feedback'
import { useStatuses } from '@/stores/statuses'
import type { ISuggestion } from '@/types'

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
        <h1 class="edit-feedback__title h1">Editing `{{ feedback.title }}`</h1>
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
          :options="statuses.map(({ name, label }, index) => ({ id: index, name, label }))"
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
          class="edit-feedback-btn delete-btn"
          @click="deleteFeedback(feedback)"
        />
        <UIButton
          class="edit-feedback-btn cancel-btn"
          type="terminate"
          text="Cancel"
          @click="handleCancelFeedback(feedback)"
        />
        <UIButton
          class="edit-feedback-btn edit-btn"
          text="Save Changes"
          @click="editFeedback(editedFeedback)"
        />
      </template>
    </FeedbackCard>
  </FeedbackLayout>
</template>

<style scoped lang="scss">
.edit-feedback {
  &__title {
    @include mobile {
      @include font-title(18px, 26px, -0.25px);
    }
  }
}

.edit-feedback-btn {
  justify-content: center;
}

.delete-btn {
  margin-right: auto;

  @include mobile {
    margin: initial;
    order: 3;
  }
}

.edit-btn {
  @include mobile {
    order: 1;
  }
}

.cancel-btn {
  @include mobile {
    order: 2;
  }
}
</style>
