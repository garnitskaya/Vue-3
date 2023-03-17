<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterBlock from "@/components/FooterBlock.vue";

const linksSocials = [
  { name: "youtube" },
  { name: "spoty" },
  { name: "apple" },
  { name: "fb" },
  { name: "inst" },
];
</script>

<template>
  <header-menu :linksSocials="linksSocials" />
  <router-view />
  <footer-block :linksSocials="linksSocials" />
</template>

<style lang="scss">
/*@import "./styles/global";*/
</style>
