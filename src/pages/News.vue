<script setup>
import BannerBlock from "@/components/BannerBlock.vue";
import NewsBlock from "@/components/NewsBlock.vue";
import Container from "@/components/UI/Container.vue";
import UImg from "@/components/UI/UImg.vue";
</script>

<template>
  <div class="news">
    <banner-block img="/images/bg.jpg" />
    <news-block bg />
  </div>
</template>

<style lang="scss" scoped>
.news {
  padding: 0 0 52px 0;
}
</style>