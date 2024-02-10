<script setup lang="ts"></script>

<template>
  <header class="mobile-header">
    <div class="mobile-header__content">
      <h2 class="mobile-header__title">Frontend Mentor</h2>
      <h2 class="mobile-header__subtitle">Feedback Board</h2>
    </div>
  </header>
</template>

<style scoped lang="scss">
.mobile-header {
  display: flex;
  align-items: center;
  height: 72px;
  padding-inline: 24px;
  background: url('@/assets/suggestions/mobile/background-header.png') no-repeat center;
  background-size: cover;

  &__title {
    font:
      700 15px/1.4 'Jost',
      sans-serif;
    letter-spacing: -0.187px;
    color: var(--color-4);
  }

  &__subtitle {
    font:
      500 13px/1.4 'Jost',
      sans-serif;
    opacity: 0.75;
    color: var(--color-4);
  }
}
</style>
