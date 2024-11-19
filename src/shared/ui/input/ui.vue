<script setup lang="ts">
import type { InputProps } from '@/shared/types/general.types'
import {
  reactive,
  ref,
  useCssModule,
  useId,
  type ModelRef,
  type Ref,
  type StyleValue,
} from 'vue'
import { Icon } from '../icon'

interface Props {
  type: 'text' | 'number' | 'email' | 'password'
  min?: number
  max?: number
  placeholder?: string
  errorMessage?: string
  styleInput?: StyleValue
  error?: boolean
  disabled?: boolean
  isIcons?: boolean
}

const props = withDefaults(defineProps<InputProps & Props>(), {
  min: 0,
  max: 9,
  errorMessage: '',
  error: false,
  disabled: false,
  isIcons: true,
  validation: () => true,
  onInput: () => {},
  onFocusIn: () => {},
  onFocusOut: () => {},
})

const model: ModelRef<string | number> = defineModel('modelValue', {
  required: true,
})

const style = useCssModule('$s')

// refs
const id: Ref<string> = ref(useId())
const focus: Ref<boolean> = ref(false)

const _type: Ref<typeof props.type> = ref(props.type)

// reactives
const clases: string[] = reactive([
  props.disabled ? style.disabled : '',
  style.label,
])

// methods
const onFocusIn = (payload: FocusEvent): void => {
  focus.value = true

  props.onFocusIn(payload)
}

const onFocusOut = (payload: FocusEvent): void => {
  focus.value = false

  props.onFocusOut(payload)
}

const onInput = (payload: InputEvent): void => {
  if (
    props.type === 'number' &&
    payload.data &&
    ((model.value as number) <= props.min ||
      (model.value as number) >= props.max)
  ) {
    model.value = +payload.data
  }

  props.onInput(payload)
}

const switchType = () => {
  if (_type.value === 'password') {
    _type.value = _type.value = 'text'
  } else if (_type.value === 'text') {
    _type.value = 'password'
  }
}

const onClickClearIcon = (): void => {
  model.value = ''
}
</script>

<template>
  <div :class="$s.inputContainer">
    <label
      :class="[focus ? style.focus : '', error ? style.error : '', ...clases]"
    >
      <input
        ref="input"
        :id="id"
        v-model="model"
        :type="_type"
        :class="$s.input"
        :style="styleInput"
        :min="min"
        :max="max"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onInput"
        @focusin="onFocusIn"
        @focusout="onFocusOut"
      />

      <div v-if="isIcons" :class="$s.icons">
        <Icon
          v-if="model"
          name="close"
          @click.stop.prevent="onClickClearIcon"
        />
        <Icon
          v-if="props.type === 'password' && _type === 'text'"
          name="visibility-on"
          @click.stop.prevent="switchType"
        />
        <Icon
          v-if="props.type === 'password' && _type === 'password'"
          name="visibility-off"
          @click.stop.prevent="switchType"
        />
      </div>
    </label>
    <span v-if="error && errorMessage" :class="$s.errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style lang="scss" module="$s">
:root {
  --border-radius: 8px;
  --border-label-before-width: 4px;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .errorMessage {
    color: $error;
  }
}

.label {
  width: 100%;
  position: relative;

  display: flex;

  cursor: pointer;

  .input {
    width: 100%;
    height: 100%;

    padding: 15px 20px;
    border: 1px solid rgba($stroke-input-color, 0.25);
    border-radius: var(--border-radius);

    transition: border-color $transition-time ease;

    &:hover,
    &:focus {
      border-color: $primary;
    }
  }

  &.error .input {
    border-color: $error;
  }

  &.disabled {
    cursor: not-allowed;

    .input {
      border-color: rgba($stroke-input-color, 0.5);
    }
  }
}

.label::before {
  content: '';

  width: 100%;
  height: 100%;

  position: absolute;
  top: calc(var(--border-label-before-width) * -1);
  left: calc(var(--border-label-before-width) * -1);

  border: var(--border-label-before-width) solid transparent;
  border-radius: calc(var(--border-radius) + var(--border-label-before-width));

  transition: border-color $transition-time;
}

// focus input
.label.focus::before {
  border-color: rgba($acent, 0.5);
}

.icons {
  height: 100%;

  position: absolute;
  right: 20px;

  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
