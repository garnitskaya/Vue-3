<script setup>
const props = defineProps({
  item: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="block">
    <div class="block__data">{{ item.data }}</div>

    <div v-if="Array.isArray(item.items)" class="block__items">
      <div class="block__item" v-for="(item, i) in item.items" :key="i">
        <h3 class="block__title">{{ item.name }}</h3>
        <p class="block__text">{{ item.text }}</p>
      </div>
    </div>

    <div v-else class="block__item">
      <h3 class="block__title">{{ item.items.name }}</h3>
      <p class="block__text">{{ item.items.text }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.block {
  margin-left: -10px;
  display: flex;
  justify-content: center;

  &__item {
    width: 576px;
  }
  &__title {
    margin-bottom: 16px;
    text-align: center;
    font-size: 20px;
    line-height: 28px;
  }
  &__data {
    position: absolute;
    left: 10px;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: var(--grey-dark);
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 4px;
      left: -18px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--white);
    }
    &::after {
      content: "";
      top: 7px;
      left: -15px;
      width: 9px;
      height: 9px;
      background: var(--red);
    }
  }
  &__text {
    margin-bottom: 28px;
    font-family: "Open Sans";

    font-size: 16px;
    line-height: 23px;
  }
}
</style>