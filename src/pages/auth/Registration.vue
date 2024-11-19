<script setup lang="ts">
import { shallowReactive } from 'vue'

import { RegistrationForm } from '@/features/auth/ui/registration-form'
import type { RegistrationModel } from '@/features/auth/ui/registration-form/ui.vue'

// refs
const data: RegistrationModel = shallowReactive({
  email: '',
  password: '',
  passwordRepeat: '',
})

// methods
function registration() {
  console.log(data.email)
}
</script>

<template>
  <RegistrationForm v-model="data" :registration="registration" />
</template>
