<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import { reactive } from 'vue'

import FeedbackCard from '@/components/common/FeedbackCard.vue'
import IconNewFeedback from '@/components/common/icons/IconNewFeedback.vue'
import UIButton from '@/components/common/UIButton.vue'
import UIInput from '@/components/common/UIInput.vue'
import UISelect from '@/components/common/UISelect.vue'
import UITextArea from '@/components/common/UITextArea.vue'
import FeedbackLayout from '@/components/FeedbackLayout.vue'
import { CATEGORIES } from '@/constants'
import router from '@/router'
import { useFeedbackStore } from '@/stores/feedback'
import type { InputSuggestion } from '@/types'

const { createNewFeedback } = useFeedbackStore()

// feedback
const newFeedback = reactive<InputSuggestion>({
  title: '',
  category: CATEGORIES[4].name,
  description: ''
})

const rules = {
  title: {
    required: helpers.withMessage(`Can't be empty`, required)
  },
  description: { required: helpers.withMessage(`Can't be empty`, required) }
}

const v$ = useVuelidate(rules, newFeedback)

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

async function handleCreateFeedback() {
  const isFormValid = await v$.value.$validate()

  if (!isFormValid) return

  await createNewFeedback(newFeedback)
}
</script>

<template>
  <FeedbackLayout>
    <FeedbackCard class="create-feedback">
      <template #icon><IconNewFeedback /></template>
      <template #title>
        <h1 class="create-feedback__title h1">Create New Feedback</h1>
      </template>
      <template #content>
        <UIInput
          title="Feedback title"
          description="Add a short, descriptive headline"
          v-model="newFeedback.title"
          :error="v$.title.$errors[0]?.$message"
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
          :error="v$.description.$errors[0]?.$message"
        />
      </template>
      <template #footer>
        <UIButton
          class="create-feedback-btn cancel-btn"
          text="Cancel"
          type="terminate"
          @click="handleCancelFeedback"
        />
        <UIButton
          class="create-feedback-btn add-btn"
          text="Add Feedback"
          @click="handleCreateFeedback"
        />
      </template>
    </FeedbackCard>
  </FeedbackLayout>
</template>

<style scoped lang="scss">
.create-feedback {
  &__title {
    @include mobile {
      @include font-title(18px, 26px, -0.25px);
    }
  }
}

.create-feedback-btn {
  justify-content: center;
}

.add-btn {
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
