<script setup lang="ts">
import type { ModelRef } from 'vue'
import { useRouter } from 'vue-router'

import type { PasswordRecoveryProps } from '@/features/auth/types'

import { AuthForm } from '@/entities/auth'

import { ROUTES } from '@/shared/constants'
import { Input, Button } from '@/shared/ui'

interface Props {
  next: () => void
}

defineProps<PasswordRecoveryProps & Props>()

const router = useRouter()

const model: ModelRef<string> = defineModel({ required: true })

// methods
const goBack = () => {
  router.push(ROUTES.AUTH.LOGIN.PATH)
}
</script>

<template>
  <AuthForm :title="title" :class="$s.form">
    <template #inputs>
      <Input type="email" placeholder="Почта" v-model="model" />
    </template>
    <template #buttons>
      <div :class="$s['buttons-container']">
        <Button label="Назад" button-type="acent" @click.prevent="goBack" />
        <Button label="Отправить" button-type="primary" @click.prevent="next" />
      </div>
    </template>
  </AuthForm>
</template>

<style lang="scss" module="$s">
@import url('../style.scss');
</style>
