<script setup>
import BannerBlock from "@/components/BannerBlock.vue";
import ConcertsBlock from "@/components/ConcertsBlock.vue";
</script>

<template>
  <div class="concerts">
    <banner-block img="/images/bg.jpg" />
    <concerts-block />
  </div>
</template>

<style lang="scss" scoped>
.concerts {
  padding: 0 0 52px 0;
}
</style>