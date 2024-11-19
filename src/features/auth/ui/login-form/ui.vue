<script setup lang="ts">
import type { ModelRef } from 'vue'
import { useRouter } from 'vue-router'

import { AuthForm } from '@/entities/auth'

import { Input, Button, Checkbox } from '@/shared/ui'
import { ROUTES } from '@/shared/constants'

interface Props {
  login: () => void
}

defineProps<Props>()

export interface LoginModel {
  email: string
  password: string
  remember: boolean
}

const model: ModelRef<LoginModel> = defineModel({ required: true })

const router = useRouter()

// methods
const goToRegistration = () => {
  router.push(ROUTES.AUTH.REGISTRATION.PATH)
}
</script>

<template>
  <AuthForm :class="$s.form">
    <template #inputs>
      <Input v-model="model.email" type="email" placeholder="Почта" />
      <Input v-model="model.password" type="password" placeholder="Пароль" />
      <div :class="$s.actions">
        <Checkbox v-model="model.remember" label="Запомнить меня" size="md" />
        <RouterLink
          :to="ROUTES.AUTH.PASSWORD_RECOVERY.PATH"
          :class="$s['password-repeat-link']"
        >
          Восстановить пароль
        </RouterLink>
      </div>
    </template>
    <template #buttons>
      <Button
        label="Войти"
        type="submit"
        button-type="primary"
        @click.prevent="login"
      />
      <div :class="$s.or">
        <span :class="$s['or-text']">или</span>
      </div>
      <Button
        label="Регистрация"
        type="button"
        button-type="acent"
        @click="goToRegistration"
      />
    </template>
  </AuthForm>
</template>

<style lang="scss" module="$s">
@import url('../style.scss');

.password-repeat-link {
  color: rgba($text, 0.6);
  transition: filter $transition-time ease;

  &:hover {
    filter: invert(25%);
  }
}
</style>
