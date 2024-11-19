<script setup lang="ts">
import { ROUTES } from '@/shared/constants'
import { useRouter } from 'vue-router'

const router = useRouter()

// methods
function goToHome() {
  router.push({ path: ROUTES.DASHBOARD.HOSTINGS.PATH })
}
</script>

<template>
  <div :class="$s.logo">
    <img width="200" src="@/app/assets/icons/logo-vertical-dark.svg?url" @click="goToHome" />
  </div>
</template>

<style lang="scss" module="$s">
.logo {
}
</style>
