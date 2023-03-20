<script setup>
import BannerBlock from "@/components/BannerBlock.vue";
import ConcertsBlock from "@/components/ConcertsBlock.vue";
import PremiereBlock from "@/components/PremiereBlock.vue";
import MerchBlock from "@/components/MerchBlock.vue";
import PromoBlock from "@/components/PromoBlock.vue";
import NewsBlock from "@/components/NewsBlock.vue";
import InstagramBlock from "@/components/InstagramBlock.vue";
import FantytilaBlock from "@/components/FantytilaBlock.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";
</script>

<template>
  <banner-block img="/images/head.jpg" btn />
  <concerts-block :quantity="7" link />
  <premiere-block />
  <merch-block />
  <promo-block />
  <news-block :quantity="4" link />
  <instagram-block />
  <fantytila-block />
  <contacts-block />
</template>



<style lang="scss" scoped>
</style>