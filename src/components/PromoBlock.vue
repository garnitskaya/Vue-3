<script setup>
import ReleasesBlock from "@/components/ReleasesBlock.vue";
import VideoBlock from "@/components/VideoBlock.vue";
import PhotosBlock from "@/components/PhotosBlock.vue";

const props = defineProps({
  quantity: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="promo-block wrap-content">
    <releases-block />
    <video-block :quantity="quantity" />
    <photos-block />
  </div>
</template>



<style lang="scss" scoped>
.promo-block {
  & > div:not(:last-child) {
    margin-bottom: 48px;
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
    @media (max-width: 480px) {
      margin-bottom: 36px;
    }
  }
}
</style>