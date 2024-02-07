<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import TheSidebar from '@/components/suggestions/sidebar/TheSidebar.vue'
import TheMain from '@/components/suggestions/main/TheMain.vue'
</script>

<template>
  <AppLayout>
    <template #sidebar>
      <TheSidebar />
    </template>
    <template #main>
      <TheMain />
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
