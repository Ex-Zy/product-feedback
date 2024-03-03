<script setup lang="ts">
const slots = defineSlots<{
  title: string
  content: string
  footer: string
  icon: string
}>()
</script>

<template>
  <div class="feedback-card">
    <div v-if="slots.icon" class="feedback-card__icon">
      <slot name="icon" />
    </div>
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
  position: relative;

  @include mobile {
    padding: 42px 24px 24px;
  }

  &__icon {
    position: absolute;
    left: 42px;
    top: 0;
    transform: translateY(-50%);

    @include mobile {
      left: 24px;
      width: 40px;
      height: 40px;
    }
  }

  &__content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  &__footer {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
    column-gap: 16px;

    @include mobile {
      flex-direction: column;
      justify-content: flex-start;
      gap: 16px;
    }
  }
}
</style>
