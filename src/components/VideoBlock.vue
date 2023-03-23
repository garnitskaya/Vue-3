<script setup>
import VideoItem from "@/components/VideoItem.vue";

const props = defineProps({
  quantity: {
    type: Number,
    default: 5,
  },
});
</script>

<template>
  <container
    id="video"
    title="Відео"
    external
    :link="{
      href: 'https://www.youtube.com/@ANTYTILA/videos',
      label: 'Більше відео на YouTube',
    }"
  >
    <div class="videos">
      <video-item v-for="n in quantity" :key="n" :id="n" />
    </div>
  </container>
</template>

<style lang="scss" scoped>
.videos {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 24px;
  > :not(:nth-child(1)),
  > :not(:nth-child(2)) {
    flex: calc(100% / 3 - 24px * 2 / 3);

    @media (max-width: 576px) {
      flex: 1 1 calc(100% / 2 - 24px / 2);
    }
  }
  > :nth-child(1),
  > :nth-child(2) {
    flex: 1 1 calc(100% / 2 - 24px / 2);
    @media (max-width: 768px) {
      flex: 1 1 calc(100% / 2 - 24px / 2);
    }
    @media (max-width: 576px) {
      flex: 100%;
    }
  }
  @media (max-width: 480px) {
    gap: 16px;
  }
}
</style>