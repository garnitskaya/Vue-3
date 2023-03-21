<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
  big: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <a href="#" :class="['link', { link_big: big }]" target="_blank">
    <u-img :src="`/icons/${link.name}.svg`" :alt="link.name" />
  </a>
</template>

<style lang="scss" scoped>
.link {
  display: inline-block;
  width: 24px;
  height: 24px;
  &_big {
    width: 32px;
    height: 32px;
  }
}
</style>