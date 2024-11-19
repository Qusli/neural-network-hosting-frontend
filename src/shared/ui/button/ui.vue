<script setup lang="ts">
import { reactive, useCssModule } from 'vue'

interface Props {
  buttonType?: 'default' | 'primary' | 'acent'
  label?: string
}

const style = useCssModule('$s')
const props = withDefaults(defineProps<Props>(), {
  buttonType: 'primary',
})

const clases = reactive([
  props.buttonType === 'default' ? style.default : '',
  props.buttonType === 'primary' ? style.primary : '',
  props.buttonType === 'acent' ? style.acent : '',
  style.button,
])
</script>

<template>
  <button :class="clases">
    {{ label }}
  </button>
</template>

<style lang="scss" module="$s">
.button {
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba($box-shadow-color, .5);

  transition: filter $transition-time ease;

  cursor: pointer;

  &.default {
    color: $text;
    background-color: white;
  }

  &.primary {
    color: white;
    background-color: $primary;
  }

  &.acent {
    color: rgba($acent-text, .5);
    background-color: $acent;
  }

  &:hover {
    filter: grayscale(25%);
  }
}
</style>
