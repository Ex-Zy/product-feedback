<template>
  <div class="widget-top">
    <div class="widget-top__content">
      <h2 class="h2 widget-top__title">Frontend Mentor</h2>
      <h2 class="widget-top__subtitle">Feedback Board</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.widget-top {
  background: url('@/assets/suggestions/desktop/background-header.png') no-repeat center;
  background-size: contain;
  padding: var(--widget-padding);
  border-radius: var(--radius-1);
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  height: 137px;
  display: flex;
  align-items: flex-end;

  &__title {
    color: var(--color-6);
  }

  &__subtitle {
    color: var(--color-6);
    opacity: 0.75;
    font:
      500 15px/1 'Jost',
      sans-serif;
  }
}
</style>
