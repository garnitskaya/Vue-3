<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout || "default-layout";
});
</script>

<template>
  <component :is="layout" :menu="route.meta.menu">
    <router-view />
  </component>
</template>

<style lang="scss"></style>
