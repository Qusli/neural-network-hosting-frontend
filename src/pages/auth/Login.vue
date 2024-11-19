<script setup lang="ts">
import { shallowReactive } from 'vue'

import { LoginForm } from '@/features/auth'
import type { LoginModel } from '@/features/auth/ui/login-form/ui.vue';

// refs
const data: LoginModel = shallowReactive({
  email: '',
  password: '',
  remember: false
})

// methods
function login() {
  console.log(data.email)
}
</script>

<template>
  <LoginForm v-model="data" :login="login" />
</template>
