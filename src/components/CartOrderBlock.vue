<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isOpenBlock: {
    type: Boolean,
    required: true,
  },
});
const isOpenBlock = ref(props.isOpenBlock);

const editBlock = () => {
  isOpenBlock.value = !isOpenBlock.value;
};
watch(
  () => props.isOpenBlock,
  () => (isOpenBlock.value = false)
);
</script>

<template>
  <div :class="['cart__block', { active: isOpenBlock }]">
    <div class="cart__header">
      <h3 @click="editBlock" :class="['cart__title', { active: isOpenBlock }]">
        {{ title }}
      </h3>
      <slot name="header"></slot>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.cart {
  &__block {
    background: var(--white);
    border-radius: 10px;
    height: fit-content;
    height: fit-content;
    max-height: 100%;
    overflow: hidden;
    transition: 0.2s all;

    &.active {
      max-height: 61px;

      .cart__header {
        border-bottom: none;
      }
    }
  }

  &__header {
    padding: 16px 24px;
    @include flex(space-between, center);
    border-bottom: 1px solid var(--grey);

    @media (max-width: 480px) {
      padding: 16px 16px 12px 16px;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    cursor: pointer;
    transition: 0.2s color;

    &.active {
      color: var(--grey-dark);
    }
  }
}
</style>
