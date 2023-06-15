<script setup>
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'
  import StoreWrap from '@/components/StoreWrap.vue'
  import CartItem from '@/components/CartItem.vue'
  import { calcTotalPrice, calcTotalDiscount } from '@/utils/calcTotalPrice.js'

  const { getters, dispatch } = useStore()
  const cartItems = computed(() => getters.cart)

  const onDeleteItems = (index) => {
    dispatch('deleteFromCart', index)
  }

  const decrementItem = (index) => {
    dispatch('decrementItem', index)
  }

  const incrementItem = (index) => {
    dispatch('incrementItem', index)
  }

  const promocode = ref(null)
</script>

<template>
  <store-wrap>
    <div class="cart">
      <div class="cart__block">
        <div class="cart__header">
          <h3 class="cart__title">Кошик</h3>
          <div
            class="cart__quantity"
            v-if="cartItems.length == 1"
          >
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
          <div
            class="cart__quantity"
            v-else
          >
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
      <div class="cart__order-block">
        <div class="cart__header">
          <h3 class="cart__title">Ваше замовлення</h3>
        </div>
        <div class="order__blocks">
          <div class="order-block">
            <div class="order-block__item">Сума замовлення</div>
            <div class="order-block__item">{{ calcTotalPrice(cartItems) }} ₴</div>
          </div>
          <div class="order-block">
            <div class="order-block__item">Знижка</div>
            <div class="order-block__item">{{ calcTotalDiscount(cartItems) }} ₴</div>
          </div>
          <div class="order-block__column">
            <label
              for="input"
              class="order-block__label"
              >Маєте промокод?</label
            >
            <div class="order-block input-block">
              <input
                id="input"
                class="order-block__input"
                type="text"
                placeholder="Якщо є"
                v-model="promocode"
              />
              <u-button
                class="order-block__button"
                styles="grey"
                >ОК</u-button
              >
            </div>
          </div>
          <div
            v-if="promocode === 'HELLO'"
            class="order-block block-border"
          >
            <div class="order-block__item">Знижка за промокодом</div>
            <div class="order-block__item">-50 ₴</div>
          </div>
          <div class="order-block total block-border">
            <div class="order-block__item">Всього до сплати</div>
            <div class="order-block__item">
              {{ promocode === 'HELLO' ? calcTotalPrice(cartItems) - 50 : calcTotalPrice(cartItems) }} ₴
            </div>
          </div>

          <u-button
            @click="$router.push('/')"
            class="order-block__checkout"
            styles="red"
            size="big"
          >
            Оформити замовлення
          </u-button>
        </div>
      </div>
    </div>
  </store-wrap>
</template>

<style lang="scss" scoped>
  @import '../styles/global.scss';
  .cart {
    margin-top: 16px;
    @include flex;
    gap: 24px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    &__block,
    &__order-block {
      background: var(--white);
      border-radius: 10px;
    }

    &__block {
      flex: 2;
      height: 100%;
      min-height: 185px;
    }

    &__order-block {
      flex: 1;
      max-width: 376px;

      height: 100%;
      @media (max-width: 768px) {
        min-width: 344px;
        align-self: center;
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

    & .order {
      &__blocks {
        padding: 12px 24px 24px;
        height: 100%;
        font-family: var(--special-font);
        font-size: 0.875rem;
        line-height: 1.3125rem;
      }
      &-block {
        margin: 0 0 10px 0;
        @include flex(space-between);
        &__column {
          @include flex;
          flex-direction: column;
        }
        &.total {
          font-weight: 600;
        }

        &.block-border {
          padding: 0 0 16px 0;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--grey);
        }
        &.input-block {
          position: relative;
          height: 40px;
        }

        &__label {
          margin-bottom: 4px;
        }

        &__input {
          padding: 10px 8px;
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          border-radius: 5px;
          border: 1px solid var(--grey-dark);
        }

        &__button {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 10;
        }
        &__checkout {
          width: 100%;
        }
      }
    }
  }
</style>
