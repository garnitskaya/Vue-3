<script setup>
import { ref } from "vue";
import Container from "@/components/UI/Container.vue";
import UImg from "@/components/UI/UImg.vue";
import MerchItem from "@/components/MerchItem.vue";
import FiltersItem from "@/components/FiltersItem.vue";

const filtersBtn = [
  { name: "new", label: "NEW" },
  { name: "sale", label: "SALE" },
  { name: "all", label: "ВСЕ" },
  { name: "candies", label: "ЦУКЕРКИ" },
  { name: "t-shirts", label: "ФУТБОЛКИ" },
  { name: "posters", label: "ПЛАКАТИ" },
  { name: "accessories", label: "АКСЕСУАРИ" },
];

const items = [
  {
    id: 1,
    title: "Магніт «АНТИТІЛА» 10Х6СМ",
    price: 300,
    status: "new",
  },
  {
    id: 2,
    title: "Футболка «Дельфіни» (чорна, чоловіча)",
    price: 300,
    status: "empty",
  },
  {
    id: 3,
    title: "Магніт «Антитіла HELLO» 9х6см",
    price: 30,
    status: "empty",
  },
  {
    id: 4,
    title: "Футболка «A» (червона, unisex)",
    price: 350,
    newPrice: 300,
    status: "sale",
  },
  {
    id: 1,
    title: "Магніт «АНТИТІЛА» 10Х6СМ",
    price: 300,
    status: "new",
  },
  {
    id: 2,
    title: "Футболка «Дельфіни» (чорна, чоловіча)",
    price: 300,
    status: "empty",
  },
  {
    id: 3,
    title: "Магніт «Антитіла HELLO» 9х6см",
    price: 30,
    status: "empty",
  },
  {
    id: 4,
    title: "Футболка «A» (червона, unisex)",
    price: 350,
    newPrice: 300,
    status: "sale",
  },
  {
    id: 1,
    title: "Магніт «АНТИТІЛА» 10Х6СМ",
    price: 300,
    status: "new",
  },
  {
    id: 2,
    title: "Футболка «Дельфіни» (чорна, чоловіча)",
    price: 300,
    status: "empty",
  },
  {
    id: 3,
    title: "Магніт «Антитіла HELLO» 9х6см",
    price: 30,
    status: "empty",
  },
  {
    id: 4,
    title: "Футболка «A» (червона, unisex)",
    price: 350,
    newPrice: 300,
    status: "sale",
  },
];

const filter = ref("all");

const filterChange = (name) => {
  filter.value = name;
};
</script>

<template>
  <div class="store">
    <container>
      <div class="store__wrap">
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
          <merch-item v-for="item in items" :key="item" :item="item" />
        </div>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.store {
  padding: 60px 0 0;
  @media (max-width: 480px) {
    padding: 48px 0 0;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__logo {
    width: 100%;
    height: auto;
    max-width: 376px;
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
      & :nth-child(odd) {
        justify-self: end;
      }
    }
    @media (max-width: 480px) {
      gap: 24px 16px;
    }
  }
}
</style>