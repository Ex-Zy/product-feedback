<script setup lang="ts">
import UIButton from '@/components/common/UIButton.vue'
import IconArrowLeft from '@/components/common/icons/IconArrowLeft.vue'
import router from '@/router'

function handleGoBack() {
  router.back()
}
</script>

<template>
  <div class="fb-layout">
    <div class="fb-layout__top">
      <UIButton type="light" text="Go Back" @click="handleGoBack">
        <IconArrowLeft />
      </UIButton>
    </div>
    <div class="fb-layout__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fb-layout {
  max-width: 540px;
  margin: 0 auto;
  padding-block: 40px;

  &__content {
    margin-top: 40px;
  }
}
</style>
