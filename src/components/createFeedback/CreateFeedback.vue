<script setup lang="ts">
import FeedbackLayout from '@/components/FeedbackLayout.vue'
import FeedbackCard from '@/components/common/FeedbackCard.vue'
import { reactive, ref } from 'vue'
import UIButton from '@/components/common/UIButton.vue'
import type { ICategory, InputSuggestion } from '@/types'
import { useCreateFeedbackStore } from '@/stores/createFeedback'
import { storeToRefs } from 'pinia'
import router from '@/router'
import { CATEGORIES } from '@/constants'
import UIInput from '@/components/common/UIInput.vue'
import UITextArea from '@/components/common/UITextArea.vue'
import UISelect from '@/components/common/UISelect.vue'
import IconNewFeedback from '@/components/common/icons/IconNewFeedback.vue'

const { loader } = storeToRefs(useCreateFeedbackStore())
const { createNewFeedback } = useCreateFeedbackStore()

// feedback
const newFeedback = reactive<InputSuggestion>({
  title: '',
  category: CATEGORIES[4].name,
  description: ''
})
function resetFeedback() {
  newFeedback.title = ''
  newFeedback.category = 'feature'
  newFeedback.description = ''
}
function redirectBack() {
  router.back()
}
function handleNewFeedback() {
  createNewFeedback(newFeedback)
  setTimeout(resetFeedback, 500)
  setTimeout(redirectBack, 600)
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
        <UIButton text="Cancel" type="terminate" />
        <UIButton text="Add Feedback" @click="handleNewFeedback" />
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
