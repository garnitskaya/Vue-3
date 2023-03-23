<script setup>
import MerchItem from "@/components/MerchItem.vue";
import ButtonArrow from "@/components/ButtonArrow.vue";

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
  <div class="merch-block wrap-content" id="merch">
    <container
      class="merch-block__container"
      title="Мерч"
      :link="{ href: '#', label: 'Переглянути весь мерч' }"
    >
      <div class="merch-block__wrap">
        <div class="merch-block__items">
          <merch-item
            class="merch-block__item"
            v-for="item in items"
            :key="item"
            :item="item"
          />
        </div>
        <div class="merch-block__bnt btn-arrow">
          <button-arrow styles="left" />
          <button-arrow styles="right" />
        </div>
      </div>
    </container>
  </div>
</template>



<style lang="scss" scoped>
.merch-block {
  background: var(--bg-grey);
  &__container {
    @media (max-width: 1024px) {
      padding: 0 !important;
    }
  }
  &__wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  &__items {
    width: 100%;
    display: flex;
    gap: 24px;
    @media (max-width: 1024px) {
      justify-content: center;
    }
    @media (max-width: 576px) {
      gap: 16px;
    }
  }
  &__item {
    flex: 1;
    @media (max-width: 992px) {
      flex: 0 0 276px;
    }
    @media (max-width: 480px) {
      flex: 0 0 160px;
    }
  }
}
</style>