<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import MerchItem from "@/components/MerchItem.vue";
import FiltersItem from "@/components/FiltersItem.vue";
import StoreWrap from "@/components/StoreWrap.vue";

const filtersBtn = [
  { name: "new", label: "NEW" },
  { name: "sale", label: "SALE" },
  { name: "all", label: "ВСЕ" },
  { name: "candies", label: "ЦУКЕРКИ" },
  { name: "t-shirts", label: "ФУТБОЛКИ" },
  { name: "posters", label: "ПЛАКАТИ" },
  { name: "accessories", label: "АКСЕСУАРИ" },
];

const filter = ref("all");

const products = ref([]);
const isProductsLoading = ref(true);

const fetching = async () => {
  try {
    const response = await axios.get("http://localhost:3000/product");
    products.value = response.data;
  } catch (error) {
    alert("Ошибка");
  } finally {
    isProductsLoading.value = false;
  }
};

onMounted(fetching);

const filterChange = (name) => {
  filter.value = name;
};
</script>

<template>
  <store-wrap>
    <a href="/" class="store__logo">
      <u-img src="/images/Antitela.png" alt="logo" />
    </a>
    <div>
      <filters-item
        styles="store"
        :filters="filtersBtn"
        :filter="filter"
        @changeFilter="filterChange"
      />
    </div>
    <div v-if="!isProductsLoading" class="store__content">
      <merch-item v-for="item in products" :key="item" :item="item" />
    </div>
    <h2 v-else>Загрузка...</h2>
  </store-wrap>
</template>

<style lang="scss" scoped>
.store {
  &__logo {
    width: 100%;
    height: auto;
    max-width: 376px;
    align-self: center;
    @media (max-width: 768px) {
      max-width: 345px;
    }
    @media (max-width: 480px) {
      max-width: 160px;
    }
  }
  &__content {
    width: 100%;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 276px);
    justify-content: center;
    gap: 24px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      & > :nth-child(odd) {
        justify-self: end;
      }
    }
    @media (max-width: 480px) {
      gap: 24px 16px;
    }
  }
}
</style>