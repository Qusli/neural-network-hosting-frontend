<script setup lang="ts">
import { onMounted, ref, type ModelRef, type Ref, type StyleValue } from 'vue'
import { Input } from '../input'
import type { InputProps } from '@/shared/types/general.types';

interface Props {
  size?: number
}

const props = withDefaults(defineProps<InputProps & Props>(), {
  size: 6,
  validation: () => true,
})

const model: ModelRef<number[]> = defineModel({ required: true })

const style: StyleValue = {
  width: '50px',
  height: '50px',
  padding: '0',
  textAlign: 'center',
}

// refs
const inputCodeList: Ref<HTMLElement[]> = ref([])

// methods
function onModelValueUpdate(val: number, index: number): void {
  const next = index + 1
  const back = index - 1

  let label: HTMLElement | null
  let input: HTMLInputElement

  if (val || val === 0) {
    label = inputCodeList.value[next]

    if (!label) return

    input = label.getElementsByTagName('input').item(0) as HTMLInputElement

    if (input.value) return

    input.focus()

    return
  }

  if (!val) {
    label = inputCodeList.value[back]

    if (!label) return

    input = label.getElementsByTagName('input').item(0) as HTMLInputElement

    input.focus()

    return
  }
}

function focus(): void {
  const inputs = inputCodeList.value

  for (let i = 0; i < inputs.length; ++i) {
    const input = inputs[i].getElementsByTagName('input').item(0)

    if (!input?.value) {
      input?.focus()

      return
    }
  }
}

function onClick(): void {
  focus()
}

// hooks
onMounted(() => {
  model.value.length = props.size
})
</script>

<template>
  <div :class="$s['input-code']">
    <div v-for="(val, index) in size" :key="val" ref="inputCodeList">
      <Input
        type="number"
        v-model="model[index]"
        :style-input="style"
        :is-icons="false"
        @click="onClick"
        @update:model-value="val => onModelValueUpdate(val, index)"
      />
    </div>
  </div>
</template>

<style lang="scss" module="$s">
.input-code {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
