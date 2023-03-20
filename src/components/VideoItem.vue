<script setup>
const props = defineProps({
  id: {
    type: Number,
    reqires: true,
  },
});
</script>

<template>
  <div class="video border-class">
    <video class="video__item" :poster="`/images/video_${id}.jpg`">
      <source type="video/mp4" src="" />
    </video>
    <svg
      class="video__icon"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        d="M60.1085 17.1203C59.7917 15.8548 59.1466 14.6952 58.2383 13.7587C57.3299 12.8223 56.1905 12.1422 54.9352 11.787C50.3485 10.667 32.0018 10.667 32.0018 10.667C32.0018 10.667 13.6552 10.667 9.06852 11.8937C7.81318 12.2488 6.67379 12.929 5.76544 13.8654C4.85709 14.8019 4.21195 15.9614 3.89518 17.227C3.05576 21.8818 2.64515 26.6038 2.66852 31.3337C2.63859 36.0991 3.04923 40.8571 3.89518 45.547C4.24441 46.7733 4.904 47.8887 5.81023 48.7856C6.71647 49.6825 7.8387 50.3305 9.06852 50.667C13.6552 51.8937 32.0018 51.8937 32.0018 51.8937C32.0018 51.8937 50.3485 51.8937 54.9352 50.667C56.1905 50.3118 57.3299 49.6317 58.2383 48.6952C59.1466 47.7588 59.7917 46.5992 60.1085 45.3337C60.9415 40.7139 61.3521 36.0279 61.3352 31.3337C61.3651 26.5682 60.9545 21.8102 60.1085 17.1203Z"
        fill="black"
      />
      <path d="M26 40.0533L41.3333 31.3333L26 22.6133V40.0533Z" fill="white" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.video {
  position: relative;
  transition: 0.4s opacity;

  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }

  &__item {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
  }
}
</style>