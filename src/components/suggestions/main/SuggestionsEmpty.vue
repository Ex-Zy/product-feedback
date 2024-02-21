<script setup lang="ts">
import UIButton from '@/components/common/UIButton.vue'
</script>

<template>
  <section class="suggestions-empty">
    <div class="suggestions-empty__in">
      <div class="suggestions-empty__content">
        <img src="@/assets/suggestions/illustration-empty.svg" alt="No feedback image" />
        <h1 class="suggestions-empty__title h1">There is no feedback yet.</h1>
        <p class="suggestions-empty__description b1">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas
          to improve our app.
        </p>
        <UIButton text="+ Add Feedback" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.suggestions-empty {
  @include mobile {
    padding-inline: 24px;
  }
  &__in {
    display: flex;
    height: 600px;
    border-radius: var(--radius-1);
    background: var(--color-4);
    padding: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  &__content {
    max-width: 410px;
  }

  &__title {
    margin: 52px 0 0;
  }

  &__description {
    margin: 16px 0 48px;
  }
}
</style>
