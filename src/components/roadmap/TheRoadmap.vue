<template>
  <div class="kanban-board">
    <TheHeader :title="kanban.name" />
    <TabsHeader
      v-if="mobile.enable"
      :columns="kanban.columns"
      :active="mobile.activeTab"
      @click="(tab) => (mobile.activeTab = tab)"
    />
    <SlickList
      v-model:list="kanban.columns"
      :axis="axis"
      :lock-axis="axis"
      class="column-container"
      use-drag-handle
      useWindowAsScrollContainer
    >
      <TransitionGroup name="list">
        <template v-for="(col, i) in kanban.columns" :key="col.id">
          <SlickItem v-if="isVisibleColumn(col)" :index="i" class="kanban-column">
            <ColumnHeader :column="col" />
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
        </template>
      </TransitionGroup>
    </SlickList>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { SlickList, SlickItem } from 'vue-slicksort'
import { storeToRefs } from 'pinia'
import SuggestionsListItem from '@/components/suggestions/main/SuggestionsListItem.vue'
import type { IBoardColumn } from '@/types'
import { useFeedbackStore } from '@/stores/feedback'
import TheHeader from '@/components/roadmap/TheHeader.vue'
import TabsHeader from '@/components/roadmap/TabsHeader.vue'
import ColumnHeader from '@/components/roadmap/ColumnHeader.vue'
import { useRoadmapStore } from '@/stores/roamap'

const { kanban } = storeToRefs(useRoadmapStore())
const { loadRoadmapToStore } = useRoadmapStore()
onMounted(loadRoadmapToStore)

const { upvoteFeedback } = useFeedbackStore()

const mobile = reactive({
  enable: useMediaQuery('(max-width: 767px)'),
  activeTab: 'in-progress'
})
const axis = computed(() => (mobile.enable ? 'x' : 'y'))

function isVisibleColumn(col: IBoardColumn) {
  if (!mobile.enable) return true
  return col.id === mobile.activeTab
}
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  align-items: start;
  margin-top: 16px;

  @include tablet {
    column-gap: 10px;
  }

  @include mobile {
    grid-template-columns: 1fr;
    padding-inline: 24px;
  }
}

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
