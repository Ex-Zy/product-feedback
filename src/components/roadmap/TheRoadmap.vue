<template>
  <div class="kanban-board">
    <TheHeader :title="kanban.name" />
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
          axis="y"
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
            <SuggestionsListItem
              class="kanban-list-item-inner"
              type="roadmap"
              :suggestion="item"
              :color="col.color"
              @upvote="upvoteFeedback"
            />
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
import type { ISuggestion } from '@/types'
import { useFeedbackStore } from '@/stores/feedback'
import TheHeader from '@/components/roadmap/TheHeader.vue'

interface IBoard {
  name: string
  columns: IBoardColumn[]
}
interface IBoardColumn {
  id: string
  name: string
  description: string
  color: string
  group: string
  items: ISuggestion[]
}

const { suggestions } = storeToRefs(useSuggestionsStore())
const { loadSuggestionsToStore } = useSuggestionsStore()
const { upvoteFeedback } = useFeedbackStore()

onMounted(loadSuggestionsToStore)

const { width } = useWindowSize()
const axis = computed(() => (width.value > 768 ? 'x' : 'y'))
const kanban = reactive<IBoard>({
  name: 'Roadmap',
  columns: [
    {
      id: 'planned',
      name: 'Planned',
      description: 'Ideas prioritized for research',
      color: '#F49F85',
      group: 'items',
      items: []
    },
    {
      id: 'in-progress',
      name: 'In-progress',
      description: 'Currently being developed',
      color: '#AD1FEA',
      group: 'items',
      items: []
    },
    {
      id: 'live',
      name: 'Live',
      description: 'Released features',
      color: '#62BCFA',
      group: 'items',
      items: []
    }
  ]
})

function saveColumns() {
  kanban.columns = kanban.columns.map((col) => {
    const items = suggestions.value.filter((item) => item.status === col.id)

    return {
      ...col,
      items
    }
  })
}

watch(() => suggestions.value, saveColumns, {
  immediate: true
})
</script>

<style lang="scss" scoped>
.kanban-board {
  display: grid;
  max-width: 1110px;
  margin: auto;

  @include tablet {
    max-width: 690px;
  }
}

.column-container {
  display: flex;
  column-gap: 30px;
  align-items: start;
  margin-top: 16px;

  @include tablet {
    column-gap: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.kanban-column {
  width: 350px;

  @include tablet {
    width: auto;
  }

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

.kanban-list {
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include tablet {
    gap: 16px;
  }
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
  width: 100%;
  visibility: visible !important; // fix blink item during draggable

  .kanban-list-item-inner {
    min-height: 100px;
    cursor: grab;
    transition: all 0.25s;
  }

  &.kanban-helper .kanban-list-item-inner {
    transform: rotate(10deg);
    background: var(--color-5);
  }
}
</style>
