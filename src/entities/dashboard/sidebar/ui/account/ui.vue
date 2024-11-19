<script setup lang="ts">
import { useAppStore } from '@/shared/model'
import { Icon } from '@/shared/ui/icon'

const appStore = useAppStore()
</script>

<template>
  <div :class="$s.account">
    <div :class="$s.user">
      <Icon name="account" :class="$s['user-icon']" :scale="1.2" />
      <div>
        <span>{{ appStore.account.firstname ?? 'Аноним' }}</span>
        <span :class="$s.email">{{ appStore.account.email }}</span>
      </div>
    </div>
    <Icon name="leave" :scale="1.15" />
  </div>
</template>

<style lang="scss" module="$s">
.account {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  .user {
    display: flex;
    align-items: center;
    gap: 10px;

    &-icon {
      width: 36px;
      height: 36px;
    }

    .email {
      display: block;
      font-size: 14px;
      color: rgba($text, 0.5);
    }
  }
}
</style>
