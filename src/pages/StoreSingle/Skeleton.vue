<script setup>
  import Skeleton from 'primevue/skeleton'
</script>

<template>
  <div class="flex justify-content-between mt-6 skeleton">
    <Skeleton
      class="mr-5 skeleton__img"
      width="28rem"
      height="28rem"
    >
    </Skeleton>
    <div class="skeleton__block">
      <Skeleton
        width="80%"
        height="3rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="3rem"
        height="2rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="7rem"
        height="1rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="7rem"
        height="1rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="3rem"
        height="1rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="7rem"
        height="1rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="18rem"
        height="3rem"
        class="mb-2 skeleton__btn"
      ></Skeleton>
      <Skeleton
        width="15rem"
        height="1rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="15rem"
        height="1rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="15rem"
        height="1rem"
        class="mb-2"
      ></Skeleton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .skeleton {
    &__block {
      flex: 0 1 50%;
    }
    @media (max-width: 576px) {
      margin-top: 0 !important;
      flex-direction: column !important;
      &__img {
        max-width: 300px;
        max-height: 300px;
        margin: 0 !important;
        align-self: center;
      }
      &__block {
        margin: 24px 0 0;
      }
      &__btn {
        width: 100% !important;
      }
    }
  }
</style>
