
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import StoreWrap from "@/components/StoreWrap.vue";
import CartItem from "@/components/CartItem.vue";

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
      <div class="cart__block">
        <div class="cart__header">
          <h3 class="cart__title">Кошик</h3>
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
          <div class="cart__quantity" v-else>
            {{ cartItems.length }} товарів
          </div>
        </div>
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
      </div>
      <div class="cart__order-block">Ваше замовлення</div>
    </div>
  </store-wrap>
</template>


<style lang="scss" scoped>
.cart {
  margin-top: 16px;
  display: flex;
  gap: 24px;
  &__block,
  &__order-block {
    background: var(--white);
    border-radius: 10px;
  }
  &__block {
    flex: 2;
  }
  &__order-block {
    flex: 1;
    max-width: 376px;
  }
  &__header {
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey);
  }
  &__title {
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.5625rem;
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