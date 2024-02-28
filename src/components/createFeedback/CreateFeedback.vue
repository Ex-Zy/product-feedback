<script setup lang="ts">
import FeedbackLayout from '@/components/FeedbackLayout.vue'
import FeedbackCard from '@/components/common/FeedbackCard.vue'
import { reactive } from 'vue'
import UIButton from '@/components/common/UIButton.vue'
import type { InputSuggestion } from '@/types'
import { CATEGORIES } from '@/constants'
import UIInput from '@/components/common/UIInput.vue'
import UITextArea from '@/components/common/UITextArea.vue'
import UISelect from '@/components/common/UISelect.vue'
import IconNewFeedback from '@/components/common/icons/IconNewFeedback.vue'
import { useFeedbackStore } from '@/stores/feedback'
import router from '@/router'

const { createNewFeedback } = useFeedbackStore()

// feedback
const newFeedback = reactive<InputSuggestion>({
  title: '',
  category: CATEGORIES[4].name,
  description: ''
})
function handleCancelFeedback() {
  const isEmptyFeedback = !newFeedback.title.trim() && !newFeedback.description.trim()

  if (isEmptyFeedback) {
    router.back()
    return
  }

  newFeedback.title = ''
  newFeedback.category = 'feature'
  newFeedback.description = ''
}
</script>

<template>
  <FeedbackLayout>
    <FeedbackCard class="create-feedback">
      <template #icon><IconNewFeedback /></template>
      <template #title>
        <h1 class="h1">Create New Feedback</h1>
      </template>
      <template #content>
        <UIInput
          title="Feedback title"
          description="Add a short, descriptive headline"
          v-model="newFeedback.title"
        />
        <UISelect
          v-model="newFeedback.category"
          title="Category"
          description="Choose a category for your feedback"
          :options="CATEGORIES"
        />
        <UITextArea
          title="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
          v-model="newFeedback.description"
        />
      </template>
      <template #footer>
        <UIButton text="Cancel" type="terminate" @click="handleCancelFeedback" />
        <UIButton text="Add Feedback" @click="createNewFeedback(newFeedback)" />
      </template>
    </FeedbackCard>
  </FeedbackLayout>
</template>

<style scoped lang="scss">
.row {
  margin: 10px 0;

  input,
  select,
  textarea {
    height: 40px;
    width: 100%;
  }
}
</style>
