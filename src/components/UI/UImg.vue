<script setup>
const props = defineProps(["src", "alt"]);
</script>

<template>
  <img class="image" :src="src" :alt="alt" />
</template>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>