<template>
  <section class="app-layout">
    <div class="app-layout__col-1">
      <slot name="sidebar" />
    </div>

    <div class="app-layout__col-2">
      <slot name="main" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  max-width: 1110px;
  margin: 0 auto;
  grid-template-columns: 255px 1fr;
  column-gap: 30px;
}
</style>
