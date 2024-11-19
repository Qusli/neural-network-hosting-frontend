<script setup lang="ts">
import type { Navigation } from '@/features/dashboard/sidebar/types'
import { Icon } from '@/shared/ui/icon'

interface Props {
  item: Navigation
}

defineProps<Props>()
</script>

<template>
  <li :class="$s.item">
    <RouterLink :to="item.path">
      <Icon :name="item.icon" />
      <span>
        {{ item.label }}
      </span>
    </RouterLink>
  </li>
</template>

<style lang="scss" module="$s">
.item a {
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;

  transition: border-color 0.3s ease-in-out;

  cursor: pointer;

  &:not(:global(.router-link-exact-active)) {
    color: $text;

    path {
      fill: $text;
    }

    &:hover {
      border-color: $acent;
    }
  }

  &:global(.router-link-exact-active) {
    color: $acent-text;
    background-color: $acent;

    path {
      fill: $acent-text;
    }
  }
}
</style>
