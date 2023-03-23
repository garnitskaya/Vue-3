<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterBlock from "@/components/FooterBlock.vue";

const linksSocials = [
  { name: "youtube", to: "#" },
  { name: "spotify", to: "#" },
  { name: "music", to: "#" },
  { name: "facebook", to: "#" },
  { name: "instagram", to: "#" },
];
</script>

<template>
  <header-menu :linksSocials="linksSocials" />
  <main class="main-container">
    <router-view />
  </main>
  <footer-block :linksSocials="linksSocials" />
</template>

<style lang="scss">
.main-container {
  flex: 1;
}
</style>
