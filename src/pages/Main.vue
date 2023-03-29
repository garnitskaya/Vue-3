<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import BannerBlock from "@/components/BannerBlock.vue";
import ConcertsBlock from "@/components/ConcertsBlock.vue";
import PremiereBlock from "@/components/PremiereBlock.vue";
import MerchBlock from "@/components/MerchBlock.vue";
import PromoBlock from "@/components/PromoBlock.vue";
import NewsBlock from "@/components/NewsBlock.vue";
import InstagramBlock from "@/components/InstagramBlock.vue";
import FantytilaBlock from "@/components/FantytilaBlock.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";

const width = ref(null);

const updateWidth = () => {
  width.value = window.innerWidth;
};

const quantity = (a, b, c) => {
  return width.value > 768 ? a : width.value > 576 ? b : c;
};

onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<template>
  <banner-block img="/images/head.jpg" btn />
  <concerts-block :quantity="quantity(7, 5, 3)" link />
  <premiere-block />
  <merch-block bg link />
  <promo-block :quantity="quantity(5, 4, 3)" />
  <news-block bg :quantity="quantity(4, 2, 2)" link />
  <instagram-block :quantity="quantity(10, 8, 8)" />
  <fantytila-block />
  <contacts-block />
</template>



<style lang="scss" scoped>
</style>