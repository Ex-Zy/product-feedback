<script setup lang="ts">
import { ref } from 'vue'

import IconArrowDown from '@/components/common/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/common/icons/IconArrowUp.vue'
import { LEAST_COMMENTS, LEAST_UPVOTES, MOST_COMMENTS, MOST_UPVOTES } from '@/constants'

const model = defineModel<string>({ default: '' })
const sortByValues = ref([MOST_UPVOTES, LEAST_UPVOTES, MOST_COMMENTS, LEAST_COMMENTS])

const isOpen = ref(false)
</script>

<template>
  <dropdown-menu :isOpen="isOpen" @opened="isOpen = true" @closed="isOpen = false" :overlay="false">
    <template #trigger>
      <button type="button" class="trigger-button">
        Sort by &nbsp;<span>{{ model }}</span>
        <IconArrowUp v-if="isOpen" class="trigger-button__arrow" />
        <IconArrowDown v-else class="trigger-button__arrow" />
      </button>
    </template>

    <template #body>
      <ul class="dropdown-list">
        <li class="dropdown-list__item" v-for="item in sortByValues" :key="item">
          <!-- don't touch <a> tag, because dropdown will work incorrect -->
          <a href="#" class="dropdown-list__text" @click="model = item">{{ item }}</a>
          <img
            v-if="item === model"
            class="dropdown-list__icon"
            src="@/assets/shared/icon-check.svg"
            alt="Check icon"
          />
        </li>
      </ul>
    </template>
  </dropdown-menu>
</template>

<style scoped lang="scss">
.trigger-button {
  height: 44px;
  display: inline-flex;
  align-items: center;
  color: #f2f4fe;
  background: var(--color-3);
  border-radius: var(--radius-1);
  border: 0;
  padding-inline: 16px;
  font:
    400 14px/1.2 'Jost',
    sans-serif;

  @include mobile {
    padding-inline: 0;
  }

  span {
    font-weight: 700;
  }

  &__arrow {
    stroke: var(--color-5);
    margin-left: 8px;
    margin-top: 2px;
  }
}
// override third party dropdown component
:deep(.v-dropdown-menu__container) {
  border: 0;
  border-radius: var(--radius-1);
  top: calc(100% + 14px + 16px); // 14px - header padding, 16px - offset
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);
}

.dropdown-list {
  &__item {
    height: 47px;
    display: flex;
    align-items: center;
    padding-inline: 24px;
    justify-content: space-between;
    position: relative;
    &:not(:last-of-type) {
      border-bottom: 1px solid #e1e3ea;
    }
  }

  &__text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    padding-inline: inherit;
    text-decoration: none;
    color: var(--color-8);
    font:
      400 16px 'Jost',
      sans-serif;
    transition: all 0.25s;
    cursor: pointer;

    &:hover {
      color: var(--color-1);
    }
  }

  &__icon {
    margin-left: auto;
  }
}
</style>
