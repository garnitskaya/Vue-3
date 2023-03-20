<script setup>
import Container from "@/components/UI/Container.vue";
import VideoItem from "@/components/VideoItem.vue";
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
      <video-item v-for="n in 5" :key="n" :id="n" />
    </div>
  </container>
</template>

<style lang="scss" scoped>
.videos {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  > :not(:nth-child(1)),
  > :not(:nth-child(2)) {
    flex: calc(100% / 3 - 24px * 2 / 3);
    min-height: 211px;
  }
  > :nth-child(1),
  > :nth-child(2) {
    flex: 1 1 calc(100% / 2 - 24px / 2);
    min-height: 324px;
  }
}
</style>