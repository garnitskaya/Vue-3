<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <router-link :class="['link', `link-${color}`]" :to="link.to">
    {{ link.name }}
  </router-link>
</template>

<style lang="scss" scoped>
.link {
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  border-bottom: 1.5px solid transparent;
  transition: border 0.4s;
  &:hover {
    border-bottom: 1.5px solid;
  }
  &-white {
    color: var(--white);
  }
}
</style>
