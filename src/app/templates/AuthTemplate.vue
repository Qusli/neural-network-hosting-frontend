<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div :class="$s.wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss" module="$s">
.wrapper {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
