<script setup lang="ts">
import { SidebarLogo } from '@/entities/dashboard/sidebar'
import { SidebarAccount } from '@/entities/dashboard/sidebar/ui/account'
import { SidebarNavigation } from '@/entities/dashboard/sidebar/ui/navigation'
import { NAVIGATION } from '../../model';
</script>

<template>
  <aside :class="$s.sidebar">
    <section :class="$s.container">
      <SidebarLogo :class="$s.logo" />
      <SidebarNavigation :class="$s.nav" :items="NAVIGATION" />
      <SidebarAccount :class="$s.account" />
    </section>
  </aside>
</template>

<style lang="scss" module="$s">
.sidebar {
  width: $sidebar-width;
  height: calc(100% - 40px);

  padding: 20px 15px;

  background-color: white;
  box-shadow: 1px 0px 4px rgba($box-shadow-color, .25);

  .container {
    height: 100%;

    display: flex;
    flex-direction: column;

    .logo {
      flex: 0 0;
    }

    .nav {
      position: relative;

      flex: 1 1;

      &::before,
      &::after {
        content: '';

        width: 100%;
        height: 1px;

        display: flex;

        margin: 15px 0;
        background-color: $stroke;
      }

      &::after {
        position: absolute;
        bottom: 0;
      }
    }

    .account {
      flex: 0 0;
    }
  }
}
</style>
