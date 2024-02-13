<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  isActive?: boolean
  isClickable?: boolean
}
interface Emits {
  (e: 'click'): void
}
const props = withDefaults(defineProps<Props>(), {
  name: 'default',
  isActive: false,
  isClickable: false
})

const emit = defineEmits<Emits>()
const handleClick = () => {
  emit('click')
}

const rootClasses = computed(() => {
  return {
    'is-active': props.isActive,
    'is-clicable': props.isClickable
  }
})
</script>

<template>
  <div class="ui-category" :class="rootClasses" @click="handleClick">
    <div class="ui-category__text">{{ name }}</div>
  </div>
</template>

<style scoped lang="scss">
.ui-category {
  display: inline-flex;
  align-items: center;
  padding: 4px 16px;
  min-height: 30px;
  background: var(--color-5);
  border-radius: var(--radius-1);
  color: var(--color-2);
  font:
    600 13px 'Jost',
    sans-serif;
  transition: all 0.25s;
  text-transform: capitalize;

  &.is-active {
    color: var(--color-4);
    background: var(--color-2);
  }

  &.is-clicable {
    cursor: pointer;
    &:not(.is-active):hover {
      background: var(--color-5-hover);
    }
  }
}
</style>
