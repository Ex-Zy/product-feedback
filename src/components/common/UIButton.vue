<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?:
    | 'primary'
    | 'secondary'
    | 'terminate'
    | 'danger'
    | 'dark'
    | 'dark-link'
    | 'light'
    | 'light-link'
  text: string
}

interface Emit {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: 'Default'
})
const emit = defineEmits<Emit>()
const slots = defineSlots<{
  default: string
}>()

const handleClick = () => emit('click')

const rootClasses = computed(() => ({
  [`is-${props.type}`]: true
}))
</script>

<template>
  <button type="button" class="ui-button" :class="rootClasses" @click="handleClick">
    <span v-if="slots.default" class="ui-button__icon">
      <slot name="default" />
    </span>
    <span class="ui-button__txt">{{ props.text }}</span>
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  display: inline-flex;
  align-items: center;
  column-gap: 14px;
  border-radius: var(--radius-1);
  border: 0;
  padding: 8px 24px;
  min-height: 44px;
  text-align: center;
  transition: all 0.25s;
  cursor: pointer;
  position: relative;
  font:
    700 14px/1 'Jost',
    sans-serif;
  color: var(--color-4);

  @include mobile {
    padding: 8px 16px;
  }

  &__icon {
    display: flex;
    align-items: center;
  }

  &:active {
    top: 1px;
  }

  &.is-primary {
    background: var(--color-1);
    &:hover {
      background: var(--color-1-hover);
    }
  }

  &.is-secondary {
    background: var(--color-2);
    &:hover {
      background: var(--color-2-hover);
    }
  }

  &.is-light {
    background: transparent;
    color: var(--color-8);
    padding-inline: 0;
    &:hover {
      .ui-button__txt {
        text-decoration: underline;
      }
    }
  }

  &.is-terminate {
    background: var(--color-3);

    &:hover {
      background: var(--color-3-hover);
      .ui-button__txt {
        color: #f2f4fe;
      }
    }
  }

  &.is-danger {
    background: var(--color-danger);

    &:hover {
      background: var(--color-danger-hover);
      .ui-button__txt {
        color: #f2f4fe;
      }
    }
  }
}
</style>
