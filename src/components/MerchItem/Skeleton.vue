<script setup>
  import Skeleton from 'primevue/skeleton'
</script>

<template>
  <div class="border-round border-1 surface-border p-3 w-12">
    <Skeleton height="13rem"> </Skeleton>
    <div class="mt-5">
      <Skeleton
        height="2rem"
        class="mb-2"
      ></Skeleton>
      <Skeleton
        width="5rem"
        height="3rem"
      ></Skeleton>
    </div>
  </div>
</template>
