<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import StoreWrap from "@/components/StoreWrap.vue";
import CartItem from "@/components/CartItem.vue";
import CartOrderBlock from "@/components/CartOrderBlock.vue";
import OrderBlocks from "../components/OrderBlocks.vue";

const { getters, dispatch } = useStore();
const cartItems = computed(() => getters.cart);

const onDeleteItems = (index) => {
  dispatch("deleteFromCart", index);
};

const decrementItem = (index) => {
  dispatch("decrementItem", index);
};

const incrementItem = (index) => {
  dispatch("incrementItem", index);
};
</script>

<template>
  <store-wrap>
    <div class="cart">
      <cart-order-block title="Кошик" class="cart__block-right">
        <template #header>
          <div class="cart__quantity" v-if="cartItems.length == 1">
            {{ cartItems.length }} товар
          </div>
          <div
            class="cart__quantity"
            v-else-if="
              cartItems.length % 10 == 2 ||
              cartItems.length % 10 == 3 ||
              (cartItems.length % 10 == 4 &&
                cartItems.length % 100 != 12 &&
                cartItems.length % 100 != 13 &&
                cartItems.length % 100 != 14)
            "
          >
            {{ cartItems.length }} товара
          </div>
          <div class="cart__quantity" v-else>{{ cartItems.length }} товарів</div>
        </template>
        <template #default>
          <div class="cart__items">
            <cart-item
              v-for="(item, index) in cartItems"
              :key="item.id"
              :item="item"
              @deleteItems="onDeleteItems(index)"
              @incrementItem="incrementItem(index)"
              @decrementItem="decrementItem(index)"
            />
          </div>
        </template>
      </cart-order-block>
      <cart-order-block class="cart__block-left" title="Ваше замовлення">
        <order-blocks />
      </cart-order-block>
    </div>
  </store-wrap>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
.cart {
  margin-top: 16px;
  @include flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  &__block {
    &-right {
      flex: 2;
    }
    &-left {
      flex: 1;
      width: 376px;
      max-width: 376px;
      @media (max-width: 768px) {
        align-self: center;
        max-width: 100%;
      }
    }
  }

  &__quantity {
    font-family: var(--special-font);
    font-size: 0.875rem;
    line-height: 1.1875rem;
    color: var(--grey-dark);
  }

  &__items {
    & > :not(:last-child) {
      border-bottom: 1px solid var(--grey);
    }
  }
}
</style>
