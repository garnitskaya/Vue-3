<script setup>
import BannerBlock from "@/components/BannerBlock.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import ConcertsBlock from "@/components/ConcertsBlock.vue";
import PremiereBlock from "@/components/PremiereBlock.vue";
import MerchBlock from "@/components/MerchBlock.vue";
import ReleasesBlock from "@/components/ReleasesBlock.vue";
import NewsBlock from "@/components/NewsBlock.vue";
import InstagramBlock from "@/components/InstagramBlock.vue";
import FantytilaBlock from "@/components/FantytilaBlock.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";
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
  <banner-block />
  <concerts-block />
  <premiere-block />
  <merch-block />
  <releases-block />
  <news-block />
  <instagram-block />
  <fantytila-block />
  <contacts-block />
  <footer-block :linksSocials="linksSocials" />
</template>

<style lang="scss">
/*@import "./styles/global";*/
</style>
