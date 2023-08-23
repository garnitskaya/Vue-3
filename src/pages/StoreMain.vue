<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import MerchItem from "@/components/MerchItem/MerchItem.vue";
import FiltersItem from "@/components/FiltersItem.vue";
import StoreWrap from "@/components/StoreWrap.vue";
import Skeleton from "@/components/MerchItem/Skeleton.vue";

const route = useRoute();
const router = useRouter();
const { getters, commit, dispatch } = useStore();

const products = computed(() => getters.products);
const filter = computed(() => getters.filter);
const isLoading = computed(() => getters.isLoading);

const setFilter = (filter) => {
  commit("setFilterProducts", filter);
};

const fetchProducts = (filter) => {
  dispatch("fetchingProducts", filter);
};

const filterChange = (name) => {
  if (!name) {
    router.push({ query: {} });
  } else if (name === "sale" || name === "new") {
    router.push({ query: { status: name } });
  } else {
    router.push({ query: { category: name } });
  }
  setFilter(name);
};

onMounted(() => {
  const status = route.query.status;
  const category = route.query.category;

  if (status) {
    router.push({ query: { status: status } });
    setFilter(status);
    fetchProducts(status);
  } else if (category) {
    router.push({ query: { category: category } });
    setFilter(category);
    fetchProducts(category);
  } else {
    fetchProducts(filter.value);
  }
});

watch(
  () => filter.value,
  () => fetchProducts(filter.value)
);

const filtersBtn = [
  { name: "new", label: "NEW" },
  { name: "sale", label: "SALE" },
  { name: "", label: "ВСЕ" },
  { name: "candies", label: "ЦУКЕРКИ" },
  { name: "t-shirts", label: "ФУТБОЛКИ" },
  { name: "posters", label: "ПЛАКАТИ" },
  { name: "accessories", label: "АКСЕСУАРИ" },
];
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
    <div class="store__content">
      <merch-item
        v-if="!isLoading"
        v-for="item in products"
        :key="item"
        :item="item"
      />
      <Skeleton v-else v-for="item in 12" />
    </div>
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
