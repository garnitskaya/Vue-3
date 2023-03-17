<script setup>
import UImg from "@/components/UI/UImg.vue";
import UButton from "@/components/UI/UButton.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="item">
    <div class="item__wrap border-class">
      <u-img
        class="item__img"
        :src="`/images/new_${item.id}.jpg`"
        :alt="item.title"
      />
    </div>
    <div class="item__title">{{ item.title }}</div>
    <div class="item__text">{{ item.text }}</div>
    <div class="item__block">
      <div class="item__data">{{ item.data }}</div>
      <u-button styles="outlined" size="small">Читати далі</u-button>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.item {
  max-height: 351px;
  display: flex;
  flex-direction: column;

  &__wrap {
    max-height: 186px;
  }
  &__title {
    margin-top: 16px;
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
  &__text {
    flex: 1;
    margin-top: 4px;
    font-family: "Open Sans";
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
  &__block {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
  &__data {
    font-family: "Open Sans";
    font-size: 0.75rem;
    line-height: 1.3125rem;
  }
}
</style>