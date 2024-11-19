<script setup lang="ts">
import {
  PasswordRecoveryFormCode,
  PasswordRecoveryFormEmail,
  PasswordRecoveryFormPassword,
} from '@/features/auth'
import { reactive, ref, type Ref } from 'vue'

const title = 'Восстановление пароля'

// refs
const data = reactive({
  email: '',
  password: '',
  passwordRecovery: '',
})
const code: Ref<number[]> = ref([])
const isActiveForm = reactive({
  'form-email': true,
  'form-code': false,
  'form-password': false,
})

// methods

/* FORM EMAIL */
function nextFormEmail() {
  isActiveForm['form-email'] = false


  isActiveForm['form-code'] = true
}
/* END FORM EMAIL */

/* FORM CODE */
function nextFormCode() {
  isActiveForm['form-code'] = false


  isActiveForm['form-password'] = true
}

function goBackFormCode() {
  isActiveForm['form-email'] = true


  isActiveForm['form-code'] = false
}
/* END FORM CODE */

/* FORM PASSWORD */
function nextFormPassword() {

  
}

function goBackFormPassword() {
  isActiveForm['form-code'] = true


  isActiveForm['form-password'] = false
}
/* END FORM PASSWORD */
</script>

<template>
  <PasswordRecoveryFormEmail
    v-if="isActiveForm['form-email']"
    :title="title"
    v-model="data.email"
    :next="nextFormEmail"
  />
  <PasswordRecoveryFormCode
    v-else-if="isActiveForm['form-code']"
    :title="title"
    v-model="code"
    :next="nextFormCode"
    @back="goBackFormCode"
  />
  <PasswordRecoveryFormPassword
    v-else-if="isActiveForm['form-password']"
    :title="title"
    v-model="data"
    :next="nextFormPassword"
    @back="goBackFormPassword"
  />
</template>
