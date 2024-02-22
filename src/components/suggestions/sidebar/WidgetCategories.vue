<script setup lang="ts">
import UiCategory from '@/components/common/UiCategory.vue'
import { reactive } from 'vue'
import type { FilterType } from '@/types'

interface IWidgetCategory {
  id: number
  name: FilterType
  label: string
  isActive: boolean
}

interface Emit {
  (e: 'filter', name: FilterType): void
}

const emit = defineEmits<Emit>()

const categories = reactive<IWidgetCategory[]>([
  { id: 1, name: 'all', label: 'All', isActive: true },
  { id: 2, name: 'ui', label: 'UI', isActive: false },
  { id: 3, name: 'ux', label: 'UX', isActive: false },
  { id: 4, name: 'enhancement', label: 'Enhancement', isActive: false },
  { id: 5, name: 'bug', label: 'Bug', isActive: false },
  { id: 6, name: 'feature', label: 'Feature', isActive: false }
])

function handleFilterCategory(filter: IWidgetCategory) {
  categories.forEach((category) => {
    category.isActive = filter.id === category.id
  })
  emit('filter', filter.name)
}
</script>

<template>
  <div class="widget-categories">
    <UiCategory
      v-for="category in categories"
      :key="category.id"
      :name="category.label"
      :is-active="category.isActive"
      is-clickable
      @click="handleFilterCategory(category)"
    />
  </div>
</template>

<style scoped lang="scss">
.widget-categories {
  border-radius: var(--radius-1);
  background: var(--color-4);
  padding: var(--widget-padding);
  min-height: 166px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  column-gap: 8px;
  row-gap: 14px;

  @include tablet {
    min-height: auto;
  }
}
</style>
