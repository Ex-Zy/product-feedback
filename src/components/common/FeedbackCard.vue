<script setup lang="ts">
const slots = defineSlots<{
  title: string
  content: string
  footer: string
}>()
</script>

<template>
  <div class="feedback-card">
    <div v-if="slots.title" class="feedback-card__title">
      <slot name="title" />
    </div>
    <div v-if="slots.content" class="feedback-card__content"><slot name="content" /></div>
    <div v-if="slots.footer" class="feedback-card__footer"><slot name="footer" /></div>
  </div>
</template>

<style scoped lang="scss">
.feedback-card {
  padding: 40px;
  border-radius: var(--radius-1);
  background: var(--color-4);

  &__content {
    margin-top: 40px;
  }

  &__footer {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
    column-gap: 16px;
  }
}
</style>
