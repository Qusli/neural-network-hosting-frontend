<script setup lang="ts">
import type { ModelRef } from 'vue'
import { useRouter } from 'vue-router'

import { AuthForm } from '@/entities/auth'

import { Input, Button } from '@/shared/ui'
import { ROUTES } from '@/shared/constants'

interface Props {
  registration: () => void
}

defineProps<Props>()

export interface RegistrationModel {
  email: string
  password: string
  passwordRepeat: string
}

const model: ModelRef<RegistrationModel> = defineModel({ required: true })

const router = useRouter()

// methods
const goToLogin = () => {
  router.push(ROUTES.AUTH.LOGIN.PATH)
}
</script>

<template>
  <AuthForm :class="$s.form">
    <template #inputs>
      <Input v-model="model.email" type="email" placeholder="Почта" />
      <Input v-model="model.password" type="password" placeholder="Пароль" />
      <Input
        v-model="model.passwordRepeat"
        type="password"
        placeholder="Повторите пароль"
      />
    </template>
    <template #buttons>
      <Button
        label="Зарегистрироваться"
        type="submit"
        button-type="primary"
        @click.prevent="registration"
      />
      <div :class="$s.or">
        <span :class="$s['or-text']">или</span>
      </div>
      <Button
        label="Войти"
        type="button"
        button-type="acent"
        @click="goToLogin"
      />
    </template>
  </AuthForm>
</template>

<style lang="scss" module="$s">
@import url('../style.scss');
</style>
