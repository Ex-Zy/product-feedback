<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { computed, ref, shallowRef } from 'vue'

interface Props {
  title: string
  description: string
  options: Array<IOption>
}

interface IOption {
  id: number
  name: string
  label: string
}

const props = defineProps<Props>()

// v-model
const value = defineModel({ default: '' })

// label of selected option
const selectedLabel = computed(
  () => props.options.find((item) => item.name === value.value)?.label ?? ''
)

// dropdown size
const wrapper = shallowRef<HTMLDivElement>()
const { width } = useElementSize(wrapper)

// show/hide dropdown
const isOpen = ref(false)
function handleOpen() {
  isOpen.value = true
}
function handleHide() {
  isOpen.value = false
}
</script>

<template>
  <div ref="wrapper" class="ui-select">
    <div class="ui-select__title">{{ props.title }}</div>
    <div class="ui-select__desc">{{ props.description }}</div>
    <VDropdown :distance="16" @apply-show="handleOpen" @apply-hide="handleHide">
      <!-- trigger -->
      <input
        type="text"
        class="ui-select__field"
        :class="{ 'is-open': isOpen }"
        :value="selectedLabel"
        readonly
      />
      <!-- popover content -->
      <template #popper>
        <ul class="dropdown-list" :style="{ width: `${width}px` }">
          <li
            class="dropdown-list__item"
            v-for="option in props.options"
            :key="option.id"
            v-close-popper
          >
            <span class="dropdown-list__text" @click="value = option.name">{{ option.label }}</span>
            <img
              v-if="option.name === value"
              class="dropdown-list__icon"
              src="@/assets/shared/icon-check.svg"
              alt="Check icon"
            />
          </li>
        </ul>
      </template>
    </VDropdown>
  </div>
</template>

<style scoped lang="scss">
.ui-select {
  position: relative;

  &__title {
    @include font-title(14px, 20px, -0.19px);
  }

  &__desc {
    margin-top: 2px;
    @include font-body(14px, 20px, 400);
  }

  &__field {
    margin-top: 14px;
    height: 48px;
    display: block;
    width: 100%;
    border-radius: var(--radius-2);
    background-color: var(--color-6);
    background-image: url('@/assets/shared/icon-arrow-down.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 16px) center;
    border: 1px solid var(--color-6);
    outline: none;
    padding-inline: 24px;

    font:
      15px/1.2 'Jost',
      sans-serif;
    color: var(--color-7);

    &.is-open {
      background-image: url('@/assets/shared/icon-arrow-up.svg');
    }

    &.is-open,
    &:focus {
      border: 1px solid var(--color-2);
    }

    @include mobile {
      font-size: 13px;
      padding: 16px;
    }
  }
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
