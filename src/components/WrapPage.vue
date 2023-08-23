<script setup>
const props = defineProps({
  bg: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="wrap-page" :style="!bg && { background: 'none' }">
    <container>
      <div class="logo">
        <a class="link" href="/">
          <u-img src="/images/Antitela.png" alt="logo" />
        </a>
      </div>
      <slot />
    </container>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.wrap-page {
  background: var(--bg-grey);
  height: 100%;

  .logo {
    @include flex(center);
  }

  .link {
    max-width: 157px;
    max-height: 100px;

    @media (max-width: 768px) {
      max-width: 141px;
      max-height: 90px;
    }

    @media (max-width: 768px) {
      max-width: 110px;
      max-height: 70px;
    }
  }
}
</style>
