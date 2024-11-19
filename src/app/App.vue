<script setup lang="ts">
import { useAppStore } from '@/shared/model/app.store';
import { onMounted } from 'vue';

const appStore = useAppStore()

onMounted(async () => {
  await appStore.init()
})
</script>

<template>
  <RouterView />
</template>
