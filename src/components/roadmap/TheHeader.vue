<script setup lang="ts">
import UIButton from '@/components/common/UIButton.vue'
import router from '@/router'
import IconArrowLeft from '@/components/common/icons/IconArrowLeft.vue'

const props = defineProps<{
  title: string
}>()

function redirectToCreate() {
  router.push('/create')
}

function handleGoBack() {
  router.back()
}
</script>

<template>
  <header class="suggestions-header">
    <div class="content">
      <UIButton class="content__btn" type="light" text="Go Back" @click="handleGoBack">
        <IconArrowLeft color="#fff" />
      </UIButton>
      <h1 class="content__title h1">{{ props.title }}</h1>
    </div>
    <UIButton text="+ Add Feedback" class="suggestions-header__btn" @click="redirectToCreate" />
  </header>
</template>

<style scoped lang="scss">
.suggestions-header {
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 14px 16px 14px 24px;
  height: 112px;
  border-radius: var(--radius-1);
  background: var(--color-3);

  @include mobile {
    border-radius: 0;
    height: 100px;
    padding: 26px 24px;
    margin: 0;
  }

  &__btn {
    margin-left: auto;
  }
}

.content {
  &__title {
    color: var(--color-4);
    @include mobile {
      @include font-title(18px, 28px, -0.25, var(--color-4));
    }
  }

  :deep(.content__btn) {
    color: var(--color-4);
    min-height: 30px;
  }
}
</style>
