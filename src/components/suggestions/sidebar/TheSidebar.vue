<script setup lang="ts">
import WidgetCategories from '@/components/suggestions/sidebar/WidgetCategories.vue'
import WidgetTop from '@/components/suggestions/sidebar/WidgetTop.vue'
import WidgetRoadmap from '@/components/suggestions/sidebar/WidgetRoadmap.vue'
</script>

<template>
  <aside class="sidebar">
    <WidgetTop />
    <WidgetCategories />
    <WidgetRoadmap />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
