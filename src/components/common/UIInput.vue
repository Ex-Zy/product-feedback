<script setup lang="ts">
import type { Ref } from 'vue'

interface Props {
  title: string
  description: string
  error?: string | Ref<string>
}

const props = defineProps<Props>()
const value = defineModel({ default: '' })
</script>

<template>
  <div class="ui-input" :class="{ 'is-error': props.error }">
    <div class="ui-input__title">{{ props.title }}</div>
    <div class="ui-input__desc">{{ props.description }}</div>
    <input type="text" class="ui-input__field" v-model="value" v-bind="$attrs" />
    <div v-if="props.error" class="ui-input__error">{{ props.error }}</div>
  </div>
</template>

<style scoped lang="scss">
.ui-input {
  position: relative;

  &__title {
    @include font-title(14px, 20px, -0.19px);
  }

  &__desc {
    margin-top: 2px;
    @include font-body(14px, 20px, 400);
  }

  &__field {
    margin-top: 14px;
    height: 48px;
    display: block;
    width: 100%;
    border-radius: var(--radius-2);
    background: var(--color-6);
    border: 1px solid var(--color-6);
    outline: none;
    padding-inline: 24px;

    font:
      15px/1.2 'Jost',
      sans-serif;
    color: var(--color-7);

    &:focus {
      border: 1px solid var(--color-2);
    }

    @include mobile {
      font-size: 13px;
      padding: 16px;
    }
  }

  &.is-error {
    .ui-input__field {
      border-color: var(--color-danger);
    }
  }

  &__error {
    margin: 4px 0 0;
    @include font-body(14px, 20px, 400, var(--color-danger));
  }
}
</style>
