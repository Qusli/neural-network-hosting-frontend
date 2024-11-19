<script setup lang="ts">
import type { Navigation } from '@/features/dashboard/sidebar/types'
import { SidebarNavigationItem } from '../navigation-item'

interface Props {
  items: Navigation[]
}

defineProps<Props>()
</script>

<template>
  <nav>
    <ul :class="$s.list">
      <SidebarNavigationItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </ul>
  </nav>
</template>

<style lang="scss" module="$s">
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
