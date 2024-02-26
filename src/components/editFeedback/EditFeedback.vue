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
import { useSuggestionsStore } from '@/stores/suggestions'

// initial data
const { loadSuggestionsPageDataToStore } = useSuggestionsStore()
const { feedback, loader } = storeToRefs(useFeedbackStore())
const { loadFeedbackToStore, editFeedback, deleteFeedback } = useFeedbackStore()

onMounted(() => {
  loadSuggestionsPageDataToStore()
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

async function handleEditFeedback(newFeedback: ISuggestion) {
  const fb = await editFeedback(newFeedback)

  console.log(fb)
}
function handleResetFeedback(feedback: ISuggestion) {
  editedFeedback.value = { ...feedback }
}
async function handleDeleteFeedback(deletedFeedback: ISuggestion) {
  const fb = await deleteFeedback(deletedFeedback)

  console.log(fb)
}
</script>

<template>
  <FeedbackLayout>
    <FeedbackCard v-if="feedback && editedFeedback" class="edit-feedback">
      <template #title>
        <h1 class="h1">Editing {{ editedFeedback?.title }}</h1>
      </template>
      <template #content>
        <div class="row">
          <input type="text" placeholder="Feedback title" v-model="editedFeedback.title" />
        </div>
        <div class="row">
          <select v-model="editedFeedback.category">
            <option v-for="category in CATEGORIES" :value="category.name" :key="category.id">
              {{ category.label }}
            </option>
          </select>
        </div>
        <div class="row">
          <select v-model="editedFeedback.status">
            <option v-for="status in statuses" :value="status.name" :key="status.name">
              {{ status.label }}
            </option>
          </select>
        </div>
        <div class="row">
          <textarea v-model="editedFeedback.description"></textarea>
        </div>
      </template>
      <template #footer>
        <UIButton text="delete" class="delete-btn" @click="handleDeleteFeedback(feedback)" />
        <UIButton text="Cancel" @click="handleResetFeedback(feedback)" />
        <UIButton text="Add Feedback" @click="handleEditFeedback(editedFeedback)" />
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

.delete-btn {
  margin-right: auto;
}
</style>
