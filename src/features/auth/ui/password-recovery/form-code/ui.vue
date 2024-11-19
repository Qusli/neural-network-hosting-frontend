<script setup lang="ts">
import { AuthForm } from '@/entities/auth'

import type { PasswordRecoveryProps } from '@/features/auth/types'

import { Button, InputCode } from '@/shared/ui'
import type { ModelRef } from 'vue'

interface Props {
  next: () => void
}

defineProps<PasswordRecoveryProps & Props>()

const emit = defineEmits(['back'])

const model: ModelRef<number[]> = defineModel({ required: true })

// methods
const goBack = () => {
  emit('back', true)
}
</script>

<template>
  <AuthForm :title="title" :class="$s.form">
    <template #inputs>
      <InputCode v-model="model"/>
    </template>
    <template #buttons>
      <div :class="$s['buttons-container']">
        <Button label="Назад" button-type="acent" @click.prevent="goBack" />
        <Button label="Далее" button-type="primary" @click.prevent="next" />
      </div>
    </template>
  </AuthForm>
</template>

<style lang="scss" module="$s">
@import url('../style.scss');
</style>
