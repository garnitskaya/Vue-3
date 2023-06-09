<script setup>
  import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
  <div class="store">
    <container>
      <div class="store__wrap">
        <breadcrumbs />
        <slot />
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
  .store {
    padding: 60px 0 0;

    @media (max-width: 480px) {
      padding: 48px 0 0;
    }

    &__wrap {
      display: flex;
      flex-direction: column;
    }
  }
</style>
