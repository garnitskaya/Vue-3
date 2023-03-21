<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "u-img",
  props: {
    src: String,
    alt: String,
  },
});
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