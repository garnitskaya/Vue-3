<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { nanoid } from "nanoid";
import CartItem from "@/components/CartItem.vue";
import { calcTotalPrice, calcTotalDiscount } from "@/utils/calcTotalPrice.js";

const { getters, dispatch } = useStore();
const cartItems = computed(() => getters.cart);
const orderData = computed(() => getters.orderData);

const router = useRouter();

const promocode = ref(localStorage.getItem("promocode") || null);

const props = defineProps({
  item: {
    type: Boolean,
    default: false,
  },
  isNotEmpty: {
    type: Boolean,
    default: false,
  },
});

const savePromocode = () => {
  localStorage.setItem("promocode", promocode.value);
};

const sendOrder = () => {
  if (!props.isNotEmpty) return;
  router.push("thanks");
  console.log(orderData.value);
  dispatch("sendOrder", {
    id: nanoid(),
    ...orderData.value,
  });
  localStorage.clear();
};
</script>

<template>
  <div class="order__blocks">
    <cart-item
      v-if="item"
      class="block-border"
      v-for="item in cartItems"
      :key="item.id"
      :item="item"
      :order="false"
    />

    <div class="order-block">
      <div class="order-block__item">Сума замовлення</div>
      <div class="order-block__item">{{ calcTotalPrice(cartItems) }} ₴</div>
    </div>
    <div class="order-block">
      <div class="order-block__item">Знижка</div>
      <div class="order-block__item">{{ calcTotalDiscount(cartItems) }} ₴</div>
    </div>
    <div class="order-block__column">
      <label for="input" class="order-block__label">Маєте промокод?</label>
      <div class="order-block input-block">
        <input
          id="input"
          class="order-block__input"
          type="text"
          placeholder="Якщо є"
          v-model="promocode"
        />
        <u-button
          @click="savePromocode"
          class="order-block__button"
          styles="grey"
          >ОК</u-button
        >
      </div>
    </div>
    <div v-if="promocode === 'HELLO'" class="order-block block-border">
      <div class="order-block__item">Знижка за промокодом</div>
      <div class="order-block__item">-50 ₴</div>
    </div>
    <div class="order-block total block-border">
      <div class="order-block__item">Всього до сплати</div>
      <div class="order-block__item">
        {{
          promocode === "HELLO"
            ? calcTotalPrice(cartItems) - 50
            : calcTotalPrice(cartItems)
        }}
        ₴
      </div>
    </div>

    <u-button
      :disabled="cartItems.length === 0"
      @click="item ? sendOrder() : $router.push('order-contacts')"
      class="order-block__checkout"
      styles="red"
      size="big"
    >
      Оформити замовлення
    </u-button>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
.order {
  &__blocks {
    padding: 12px 24px 24px;
    height: 100%;
    font-family: var(--special-font);
    font-size: 0.875rem;
    line-height: 1.3125rem;

    .block-border {
      padding: 0 0 16px 0;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--grey);
    }
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
      &::placeholder {
        color: var(--grey-dark);
      }
    }

    &__button {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
    }
    &__checkout {
      width: 100% !important;
    }
  }
}
</style>
