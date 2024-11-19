<script setup lang="ts">
import { AuthForm } from '@/entities/auth'

import type { PasswordRecoveryProps } from '@/features/auth/types'

import { Input, Button } from '@/shared/ui'
import type { ModelRef } from 'vue'

interface Props {
  next: () => void
}

defineProps<PasswordRecoveryProps & Props>()

const emit = defineEmits(['back'])

interface Model {
  password: string
  passwordRecovery: string
}

const model: ModelRef<Model> = defineModel({ required: true })

// methods
const goBack = () => {
  emit('back', true)
}
</script>

<template>
  <AuthForm :title="title" :class="$s.form">
    <template #inputs>
      <Input type="password" placeholder="Пароль" v-model="model.password" />
      <Input
        type="password"
        placeholder="Повторите пароль"
        v-model="model.passwordRecovery"
      />
    </template>
    <template #buttons>
      <div :class="$s['buttons-container']">
        <Button label="Назад" button-type="acent" @click.prevent="goBack" />
        <Button label="Сохранить" button-type="primary" @click.prevent="next" />
      </div>
    </template>
  </AuthForm>
</template>

<style lang="scss" module="$s">
@import url('../style.scss');
</style>
