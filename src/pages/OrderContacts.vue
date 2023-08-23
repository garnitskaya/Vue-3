<script setup>
import { ref, computed, onMounted, watch } from "vue";
import CartOrderBlock from "@/components/CartOrderBlock.vue";
import OrderBlocks from "@/components/OrderBlocks.vue";
import FormContacts from "@/components/FormContacts.vue";
import FormDelivery from "@/components/FormDelivery.vue";
import FormPay from "@/components/FormPay.vue";
import WrapPage from "@/components/WrapPage.vue";
import { useStore } from "vuex";

const { dispatch, getters } = useStore();

const orderData = computed(() => getters.orderData);
const isNotEmpty = computed(() =>
  Object.values(orderData.value).every((item) => item)
);

const editModeContacts = ref(true);
const editModeDelivery = ref(true);
const editModePay = ref(true);

const checkedValuePrivacy = ref(
  localStorage.getItem("privacyPolicy") || "true"
);

const isOpenBlockDelivery = ref(true);
const isOpenBlockPay = ref(true);

const setValuePrivacyPolicy = () => {
  dispatch("orderData", { privacyPolicy: String(checkedValuePrivacy.value) });
};

const changeEditMode = (mode) => {
  switch (mode) {
    case "contacts":
      editModeContacts.value = !editModeContacts.value;
      break;
    case "delivery":
      editModeDelivery.value = !editModeDelivery.value;
      break;
    case "pay":
      editModePay.value = !editModePay.value;
      break;
  }
};

onMounted(() => {
  if (Object.keys(orderData.value.contacts).length != 0) {
    editModeContacts.value = false;
    isOpenBlockDelivery.value = false;
  } else {
    editModeContacts.value = true;
    isOpenBlockDelivery.value = true;
  }

  if (Object.keys(orderData.value.delivery).length != 0) {
    editModeDelivery.value = false;
    isOpenBlockPay.value = false;
  } else {
    editModeDelivery.value = true;
    isOpenBlockPay.value = true;
  }

  if (Object.keys(orderData.value.pay).length != 0) {
    editModePay.value = false;
  } else {
    editModePay.value = true;
  }
});

watch(
  () => orderData.value,
  () => {
    if (Object.keys(orderData.value.contacts).length != 0) {
      editModeContacts.value = false;
      isOpenBlockDelivery.value = false;
    } else {
      editModeContacts.value = true;
      isOpenBlockDelivery.value = true;
    }

    if (Object.keys(orderData.value.delivery).length != 0) {
      editModeDelivery.value = false;
      isOpenBlockPay.value = false;
    } else {
      editModeDelivery.value = true;
      isOpenBlockPay.value = true;
    }

    if (Object.keys(orderData.value.pay).length != 0) {
      editModePay.value = false;
    } else {
      editModePay.value = true;
    }
  }
);
</script>

<template>
  <wrap-page bg class="order">
    <div class="order__wrap">
      <div class="order__block-left">
        <cart-order-block title="Контактні дані" :isOpenBlock="false">
          <template #header v-if="!editModeContacts">
            <div @click="changeEditMode('contacts')" class="order__edit">
              Редагувати
            </div>
          </template>
          <template #default>
            <form-contacts
              :editMode="editModeContacts"
              @setEditMode="changeEditMode('contacts')"
            />
          </template>
        </cart-order-block>

        <cart-order-block title="Доставка" :isOpenBlock="isOpenBlockDelivery">
          <template #header v-if="!editModeDelivery">
            <div @click="changeEditMode('delivery')" class="order__edit">
              Редагувати
            </div>
          </template>
          <template #default>
            <form-delivery
              :editMode="editModeDelivery"
              @setEditMode="changeEditMode('delivery')"
            />
          </template>
        </cart-order-block>

        <cart-order-block title="Оплата" :isOpenBlock="isOpenBlockPay">
          <template #header v-if="!editModePay">
            <div @click="changeEditMode('pay')" class="order__edit">
              Редагувати
            </div>
          </template>
          <template #default>
            <form-pay
              :editMode="editModePay"
              @setEditMode="changeEditMode('pay')"
            />
          </template>
        </cart-order-block>
      </div>
      <div class="order__block-right">
        <cart-order-block title="Ваше замовлення" :isOpenBlock="false">
          <template #header>
            <router-link class="order__edit" to="cart">Редагувати </router-link>
          </template>
          <template #default>
            <order-blocks
              item
              :isNotEmpty="isNotEmpty && orderData.privacyPolicy === 'true'"
            />
          </template>
        </cart-order-block>
        <div v-if="isNotEmpty" class="privacy-policy">
          <u-checkbox
            name="privacyPolicy"
            id="orderDeliveryPay"
            :checked="checkedValuePrivacy === 'true' ? true : false"
            :value="checkedValuePrivacy === 'true' ? true : false"
            v-model:checked="checkedValuePrivacy"
            @setValue="setValuePrivacyPolicy"
          >
            <div class="privacy-policy__item">
              Підтверджуючи замовлння, я приймаю умови
              <span>користувальницької угоди</span>
            </div>
          </u-checkbox>
        </div>
      </div>
    </div>
  </wrap-page>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.order {
  &__wrap {
    padding: 36px 0;
    @include flex(center);
    gap: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 0 70px 0;
    }
  }

  &__block {
    &-left {
      display: flex;
      flex-direction: column;
      gap: 24px;
      flex: 1.5;
      max-width: 576px;

      @media (max-width: 768px) {
        max-width: 100%;
      }
    }

    &-right {
      flex: 1;
      width: 376px;
      max-width: 376px;

      @media (max-width: 768px) {
        align-self: center;
        max-width: 100%;
      }
    }
  }

  .order__edit {
    font-family: var(--special-font);
    font-size: 0.875rem;
    line-height: 1.1875rem;
    text-decoration-line: underline;
    color: var(--grey-dark);
    cursor: pointer;
  }

  .privacy-policy {
    margin-top: 30px;

    &__item {
      margin-top: -3px;
      flex: 1 1;
      font-family: var(--num-font);
      font-size: 14px;
      line-height: 21px;

      > span {
        color: var(--red);
        text-wrap: nowrap;
      }
    }
  }
}
</style>
