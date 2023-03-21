<script setup>
import MerchItem from "@/components/MerchItem.vue";

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
];
</script>

<template>
  <div class="merch-block grey-bg" id="merch">
    <container
      title="Мерч"
      :link="{ href: '#', label: 'Переглянути весь мерч' }"
    >
      <div class="merch-block__items">
        <merch-item
          class="merch-block__item"
          v-for="item in items"
          :key="item"
          :item="item"
        />
      </div>
    </container>
  </div>
</template>



<style lang="scss" scoped>
.merch-block {
  &__items {
    display: flex;
    gap: 24px;
  }
  &__item {
    flex: 1;
  }
}
</style>