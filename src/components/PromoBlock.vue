<script setup>
import ReleasesBlock from "@/components/ReleasesBlock.vue";
import VideoBlock from "@/components/VideoBlock.vue";
import PhotosBlock from "@/components/PhotosBlock.vue";
</script>

<template>
  <div class="promo-block">
    <releases-block />
    <video-block />
    <photos-block />
  </div>
</template>



<style lang="scss" scoped>
.promo-block {
  padding: 48px 0;
  & > div:not(:last-child) {
    margin-bottom: 48px;
  }
}
</style>