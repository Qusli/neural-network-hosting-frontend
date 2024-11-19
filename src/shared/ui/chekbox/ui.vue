<script setup lang="ts">
import { ref, useCssModule, useId, type ModelRef, type Ref } from 'vue'

import type { InputProps } from '@/shared/types/general.types'
import { ICON_SIZE } from '@/shared/constants/icon-size.constant';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  label?: string
}

const props = withDefaults(defineProps<InputProps & Props>(), {
  size: 'xl',
  validation: () => true,
})

const model: ModelRef<boolean> = defineModel({ required: true })

const style = useCssModule('$s')

// refs
const id: Ref<string> = ref(useId())
const hover: Ref<boolean> = ref(false)

const _size: Ref<string> = ref(`${ICON_SIZE[props.size]}px`)
</script>

<template>
  <label :for="id" :class="$s.label" @mouseenter="hover = true" @mouseleave="hover = false">
    <input
      v-model="model"
      type="checkbox"
      :id="id"
      :class="[$s['checkbox-hidden'], 'hidden']"
    />
    <div :class="[hover ? $s.hover : '', style.checkbox]"></div>
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style lang="scss" module="$s">
:root {
  --size-hover-background: 125%;
}

.label {
  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  .checkbox {
    width: v-bind(_size);
    height: v-bind(_size);

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba($stroke-input-color, 0.25);
    border-radius: 4px;

    transition: border-color $transition-time ease;

    &.hover {
      border-color: $primary;
    }
  }

  .checkbox::after {
    content: '';

    width: 0;
    height: 0;

    position: absolute;

    background-color: rgba($acent, 0.4);
    border-radius: 100%;

    transition: all $transition-time ease;
  }

  .checkbox.hover::after {
    width: calc(var(--size-hover-background) + 5px);
    height: calc(var(--size-hover-background) + 5px);
  }

  .checkbox-hidden:checked ~ .checkbox::before {
    content: url("@/app/assets/icons/done.svg");

    width: v-bind(_size);
    height: v-bind(_size);
  }
}
</style>
