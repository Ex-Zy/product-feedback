<template>
  <div class="kanban-board">
    <h2>{{ kanban.name }}</h2>
    <SlickList
      v-model:list="kanban.columns"
      :axis="axis"
      :lock-axis="axis"
      class="column-container"
      use-drag-handle
      useWindowAsScrollContainer
    >
      <SlickItem v-for="(col, i) in kanban.columns" :key="col.id" :index="i" class="kanban-column">
        <header class="kanban-column__header">
          <DragHandle />
          <div class="kanban-column__title h3">
            {{ col.name }}
            ({{ col.items.length }})
          </div>
          <div class="kanban-column__description b1">
            {{ col.description }}
          </div>
        </header>
        <SlickList
          v-model:list="col.items"
          axis="xy"
          :group="col.group"
          class="kanban-list"
          helper-class="kanban-helper"
        >
          <SlickItem
            v-for="(item, j) in col.items"
            :key="item.id"
            :index="j"
            class="kanban-list-item"
          >
            <SuggestionsListItem :suggestion="item" @upvote="upvoteFeedback" />
          </SlickItem>
        </SlickList>
      </SlickItem>
    </SlickList>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { SlickList, SlickItem, DragHandle } from 'vue-slicksort'
import { useSuggestionsStore } from '@/stores/suggestions'
import { storeToRefs } from 'pinia'
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import { useFeedbackStore } from '@/stores/feedback'

const { suggestions } = storeToRefs(useSuggestionsStore())
const { loadSuggestionsToStore } = useSuggestionsStore()
const { upvoteFeedback } = useFeedbackStore()

onMounted(loadSuggestionsToStore)

const { width } = useWindowSize()
const axis = computed(() => (width.value > 768 ? 'x' : 'y'))
const kanban = reactive({
  name: 'Kanban Example',
  columns: [
    {
      id: 'planned',
      name: 'Planned',
      description: 'Ideas prioritized for research',
      color: '#F49F85',
      group: 'items',
      items: suggestions.value.filter((item) => item.status === 'planned')
    },
    {
      id: 'in-progress',
      name: 'In-progress',
      description: 'Currently being developed',
      color: '#AD1FEA',
      group: 'items',
      items: suggestions.value.filter((item) => item.status === 'in-progress')
    },
    {
      id: 'live',
      name: 'Live',
      description: 'Released features',
      color: '#62BCFA',
      group: 'items',
      items: suggestions.value.filter((item) => item.status === 'live')
    }
  ]
})

watch(
  () => suggestions.value,
  () => {
    const planed = suggestions.value.filter((item) => item.status === 'planned')
    const inprogress = suggestions.value.filter((item) => item.status === 'in-progress')
    const live = suggestions.value.filter((item) => item.status === 'live')

    kanban.columns[0].items = planed
    kanban.columns[1].items = inprogress
    kanban.columns[2].items = live
  }
)
</script>

<style lang="scss" scoped>
.kanban-board {
  padding-top: var(--header-height);
  max-width: 1400px;
  margin: auto;
}

.column-container {
  display: flex;
  align-items: start;
}

.kanban-column {
  width: 400px;
  margin: 10px;
  padding: 10px;
  background: #eee;
  border-radius: 20px;

  &__header {
    padding: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }
}

.kanban-list {
  max-height: 500px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .column-container {
    flex-direction: column;
    align-items: stretch;
  }
  .kanban-column {
    width: auto;
  }
}
</style>

<style lang="scss">
.kanban-list-item {
  width: calc(100% - 10px);
  margin: 5px;

  .kanban-list-item-inner {
    min-height: 100px;
    padding: 10px 15px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    cursor: grab;
    transition:
      background 0.2s,
      transform 0.2s;
  }

  &.kanban-helper .kanban-list-item-inner {
    transform: rotate(10deg);
    background: #9b51e0;
    color: white;
  }
}
</style>
