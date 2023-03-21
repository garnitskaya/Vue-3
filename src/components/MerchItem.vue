<script setup>
import StatusItem from "@/components/StatusItem.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a href="#" :class="['item', `item-${item.status}`]">
    <status-item
      v-if="item.status != 'empty'"
      :color="item.status === 'new' ? '#59AD02' : '#FF1E00'"
      >{{ item.status }}</status-item
    >

    <div class="item__img">
      <u-img :src="`/images/magnets_${item.id}.png`" :alt="item.title" />
    </div>
    <div class="item__name">{{ item.title }}</div>
    <div class="item__price">
      <span v-if="item.newPrice" class="item__price-new"
        >{{ item.newPrice }} ₴</span
      >
      <span :class="{ 'item__price-old': item.newPrice }"
        >{{ item.price }} ₴</span
      >
    </div>
  </a>
</template>



<style lang="scss" scoped>
.item {
  position: relative;
  display: grid;
  grid-template-rows: 1fr 40px auto;
  gap: 8px;
  padding: 12px 12px 16px;
  max-width: 276px;
  min-height: 399px;
  border: 1px solid var(--grey-dark-opacity);
  border-radius: 10px;

  &__img {
    height: auto;
    align-self: center;
  }
  &__name {
    font-weight: 200;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    cursor: pointer;
  }
  &__price {
    font-size: 0.875rem;
    line-height: 1.1875rem;
    &-new {
      font-size: 1rem;
      line-height: 1.375rem;
    }
    &-old {
      margin: 0 0 0 8px;
      font-weight: 300;
      text-decoration: line-through;
      color: var(--grey-dark);
    }
  }
}
</style>