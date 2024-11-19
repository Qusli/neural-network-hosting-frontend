<script setup lang="ts">
import { Sidebar } from '@/features/dashboard/sidebar'
</script>

<template>
  <div :class="$s.wrapper">
    <Sidebar />
    <RouterView />
  </div>
</template>

<style lang="scss" module="$s">
.wrapper {
  height: 100%;

  display: grid;
  grid-template-columns: $sidebar-width 1fr;
}
</style>
