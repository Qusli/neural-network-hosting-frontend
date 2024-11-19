<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>

<template>
  <form :class="$s.form">
    <div :class="$s.container">
      <img
        v-if="!title"
        width="250px"
        src="@/app/assets/images/logo-full-dark.png"
      />
      <span v-else class="title">{{ title }}</span>

      <div v-if="$slots.inputs" :class="$s.inputs">
        <slot name="inputs"></slot>
      </div>

      <div v-if="$slots.buttons" :class="$s.buttons">
        <slot name="buttons"></slot>
      </div>
    </div>
  </form>
</template>

<style lang="scss" module="$s">
.form {
  padding: 45px 35px;
  border-radius: 10px;
  box-shadow: 0 0 4px $box-shadow-color;
  background-color: white;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    img {
      pointer-events: none;
    }

    .inputs,
    .buttons {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: stretch;
      gap: 15px;
    }
  }
}
</style>
