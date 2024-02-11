<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 767px)')

const isOpen = defineModel()
const toggleOpen = () => (isOpen.value = !isOpen.value)
const closeSidebar = () => (isOpen.value = false)
</script>

<template>
  <div class="widget-top">
    <div class="widget-top__content">
      <h2 class="h2 widget-top__title">Frontend Mentor</h2>
      <h2 class="widget-top__subtitle">Feedback Board</h2>
    </div>
    <button
      class="hamburger hamburger--collapse"
      :class="{ 'is-active': isOpen }"
      type="button"
      @click="toggleOpen"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>

  <!-- backdrop for mobile -->
  <teleport to="#app">
    <div v-if="isMobile && isOpen" class="backdrop" @click="closeSidebar" />
  </teleport>
</template>

<style scoped lang="scss">
$hamburger-padding-x: 15px;
$hamburger-padding-y: 15px;
$hamburger-layer-width: 20px;
$hamburger-layer-height: 2px;
$hamburger-layer-spacing: 6px;
$hamburger-layer-color: #fff;
$hamburger-layer-border-radius: 4px;
$hamburger-hover-opacity: 1;

@import 'hamburgers/_sass/hamburgers/hamburgers';

.widget-top {
  background: url('@/assets/suggestions/desktop/background-header.png') no-repeat center;
  background-size: cover;
  padding: var(--widget-padding);
  border-radius: var(--radius-1);
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  min-height: 137px;
  display: flex;
  align-items: flex-end;

  @include tablet {
    min-height: auto;
  }

  @include mobile {
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 16px 9px 16px 24px;
    background: url('@/assets/suggestions/mobile/background-header.png') no-repeat center;
    background-size: cover;
    border-radius: 0;
    filter: none;
    position: fixed;
    inset-inline: 0;
    top: 0;
  }

  &__title {
    color: var(--color-6);

    @include mobile {
      font:
        700 15px/1.4 'Jost',
        sans-serif;
      letter-spacing: -0.187px;
      color: var(--color-4);
    }
  }

  &__subtitle {
    color: var(--color-6);
    opacity: 0.75;
    font:
      500 15px/1 'Jost',
      sans-serif;

    @include mobile {
      font:
        500 13px/1.4 'Jost',
        sans-serif;
      opacity: 0.75;
      color: var(--color-4);
    }
  }
}

.backdrop {
  position: fixed;
  inset: 0;
  background: #000;
  opacity: 0.5;
}
</style>
