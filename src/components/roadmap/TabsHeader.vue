<script setup lang="ts">
import type { IBoardColumn } from '@/types'

interface Props {
  columns: IBoardColumn[]
  active: string
}

interface Emits {
  (e: 'click', tabName: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

function handleClick(tabName: string) {
  emits('click', tabName)
}
</script>

<template>
  <nav class="tabs-header">
    <a
      v-for="col in props.columns"
      :key="col.id"
      href="#"
      class="tabs-header__link"
      :class="{ 'is-active': col.id === props.active }"
      @click.prevent="handleClick(col.id)"
      >{{ col.name }} ({{ col.items.length }})</a
    >
  </nav>
</template>

<style scoped lang="scss">
.tabs-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  height: 60px;
  border-bottom: 1px solid #acb0c6;

  &__link {
    position: relative;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @include font-body(13px, 1.2, 700, #acb0c6);

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--color-1);
      transition: all 0.25s;
      opacity: 0;
    }

    &.is-active {
      color: var(--color-7);
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
