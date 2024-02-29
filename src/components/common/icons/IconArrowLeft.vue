<script lang="ts" setup>
withDefaults(
  defineProps<{
    color?: string
  }>(),
  {
    color: '#4661E6'
  }
)
</script>
<template>
  <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L2 5l4-4" :stroke="color" stroke-width="2" fill="none" fill-rule="evenodd" />
  </svg>
</template>
