<script setup>
import Skeleton from "primevue/skeleton";
</script>

<template>
  <Skeleton class="circle" shape="circle" size="8rem" />
  <div class="w-5 block">
    <Skeleton height="3rem" class="mb-3" />
    <Skeleton height="1.5rem" class="mb-3" />
    <div class="flex mt-3 justify-content-center">
      <Skeleton
        v-for="item in 4"
        width="1.5rem"
        height="1.5rem"
        class="mr-4"
      ></Skeleton>
      <Skeleton width="1.5rem" height="1.5rem" />
    </div>
  </div>
  <Skeleton width="20rem" height="3rem" class="mb-2" />
</template>

<style lang="scss" scoped>
.circle {
  @media (max-width: 576px) {
    width: 5rem !important;
    height: 5rem !important;
  }
}

.block {
  @media (max-width: 576px) {
    width: 100% !important;
  }
}
</style>
