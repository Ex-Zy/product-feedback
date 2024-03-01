<script setup lang="ts">
import { DragHandle } from 'vue-slicksort'
import type { IBoardColumn } from '@/components/roadmap/TheRoadmap.vue'

interface Props {
  column: IBoardColumn
}

const props = defineProps<Props>()
</script>

<template>
  <header class="kanban-column__header">
    <DragHandle />
    <div class="kanban-column__title h3">
      {{ props.column.name }}
      ({{ props.column.items.length }})
    </div>
    <div class="kanban-column__description b1">
      {{ props.column.description }}
    </div>
  </header>
</template>

<style scoped lang="scss">
.kanban-column {
  &__header {
    padding-block: 32px;

    @include tablet {
      padding-block: 24px;
    }
  }

  &__title {
    @include tablet {
      @include font-title(14px, 20px, -0.19px);
    }
  }

  &__description {
    @include tablet {
      @include font-body(14px, 20px);
    }
  }
}
</style>
