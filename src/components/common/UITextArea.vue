<script setup lang="ts">
interface Props {
  title: string
  description: string
  error?: string
}

const props = defineProps<Props>()
const value = defineModel({ default: '' })
</script>

<template>
  <div class="ui-textarea" :class="{ 'is-error': props.error }">
    <div class="ui-textarea__title">{{ props.title }}</div>
    <div class="ui-textarea__desc">{{ props.description }}</div>
    <textarea type="text" class="ui-textarea__field" v-model="value" v-bind="$attrs" />
    <div v-if="props.error" class="ui-textarea__error">{{ props.error }}</div>
  </div>
</template>

<style scoped lang="scss">
.ui-textarea {
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
    height: 96px;
    display: block;
    width: 100%;
    border-radius: var(--radius-2);
    background: var(--color-6);
    border: 1px solid var(--color-6);
    outline: none;
    padding-inline: 24px;
    padding-block: 16px;
    resize: none;

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
    .ui-textarea__field {
      border-color: var(--color-danger);
    }
  }

  &__error {
    margin: 4px 0 0;
    @include font-body(14px, 20px, 400, var(--color-danger));
  }
}
</style>
