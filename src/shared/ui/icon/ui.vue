<script setup lang="ts">
import { type IconProps } from '@/shared/types/general.types'
import { defineAsyncComponent, type Component, type Ref } from 'vue'

const props = defineProps<Partial<Omit<IconProps, 'size'>>>()

// refs
const icon: Ref<Component> = defineAsyncComponent(
  () => import(`@/app/assets/icons/${props.name}.svg`),
)
</script>

<template>
  <component :class="[color ? $s.fill : '', $s.icon]" :is="icon" />
</template>

<style lang="scss" module="$s">
.icon {
  width: 24px;
  height: 24px;
  transform: scale(v-bind(scale));
}

.fill path {
  fill: v-bind(color);
}
</style>
