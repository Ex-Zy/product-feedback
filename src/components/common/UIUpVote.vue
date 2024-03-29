<script setup lang="ts">
import { computed } from 'vue'

import IconArrowUp from '@/components/common/icons/IconArrowUp.vue'

interface Props {
  align?: 'vertical' | 'horizontal'
  modelValue: number
  isUpvoted?: boolean
}

interface Emit {
  (e: 'update:modelValue', value: number): void
}

const props = withDefaults(defineProps<Props>(), {
  align: 'vertical',
  isUpvoted: false
})
const emit = defineEmits<Emit>()

const tooltip = computed(() => {
  return props.isUpvoted ? 'You upvoted for this suggestion' : ''
})

const rootClasses = computed(() => {
  return {
    [`is-${props.align}`]: true,
    'is-upvoted': props.isUpvoted
  }
})

function handleUpVote(value: number) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    v-tooltip="tooltip"
    class="ui-upvote"
    :class="rootClasses"
    @click="handleUpVote(props.modelValue + 1)"
  >
    <div class="ui-upvote__content">
      <div class="ui-upvote__arrow"><IconArrowUp /></div>
      <div class="ui-upvote__amount">{{ props.modelValue }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui-upvote {
  padding: 8px;
  border-radius: var(--radius-1);
  background: var(--color-5);
  transition: all 0.25s;
  cursor: pointer;

  &:hover:not(.is-upvoted) {
    background: var(--color-5-hover);
  }

  &.is-upvoted {
    cursor: not-allowed;
    background: var(--color-2);

    .ui-upvote__arrow {
      stroke: var(--color-6);
    }

    .ui-upvote__amount {
      color: var(--color-6);
    }
  }

  &.is-vertical {
    width: 40px;
    height: 52px;

    .ui-upvote__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
  }

  &.is-horizontal {
    width: 69px;
    height: 40px;
    padding-inline: 15px;
    display: flex;
    align-items: center;

    @include mobile {
      height: 32px;
    }

    .ui-upvote__content {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: flex-end;
    }

    .ui-upvote__arrow {
      padding-bottom: 2px;
    }
  }

  &__arrow {
    stroke: var(--color-2);
    display: flex;
    flex-grow: 1;
    align-items: center;
    transition: all 0.25s;
    width: 10px;
    height: 7px;
  }

  &__amount {
    color: var(--color-7);
    font:
      700 13px/1.4 'Jost',
      sans-serif;
    letter-spacing: -0.181px;
    transition: all 0.25s;
  }
}
</style>
