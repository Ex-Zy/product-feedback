<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type:
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

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: 'Default'
})

const rootClasses = computed(() => ({
  [`is-${props.type}`]: true
}))
</script>

<template>
  <button type="button" class="ui-button" :class="rootClasses">
    <span class="ui-button__txt">{{ props.text }}</span>
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  display: inline-flex;
  align-items: center;
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

  &:active {
    top: 1px;
  }

  &.is-primary {
    background: var(--color-1);
    &:hover {
      background: var(--color-1-hover);
    }
  }
}
</style>
