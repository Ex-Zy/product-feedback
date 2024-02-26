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
      <template #title>
        <h1 class="h1">Create New Feedback</h1>
      </template>
      <template #content>
        <div class="row">
          <input type="text" placeholder="Feedback title" v-model="newFeedback.title" />
        </div>
        <div class="row">
          <select v-model="newFeedback.category">
            <option v-for="category in CATEGORIES" :value="category.name" :key="category.id">
              {{ category.label }}
            </option>
          </select>
        </div>
        <div class="row">
          <textarea v-model="newFeedback.description"></textarea>
        </div>
      </template>
      <template #footer>
        <UIButton text="Cancel" />
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
