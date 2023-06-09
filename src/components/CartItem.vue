<script setup>
  const props = defineProps({
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
  })

  const emits = defineEmits(['deleteItems', 'incrementItem', 'decrementItem'])

  const onDelete = () => {
    emits('deleteItems')
  }

  const decrementItem = () => {
    emits('decrementItem')
  }

  const incrementItem = () => {
    emits('incrementItem')
  }
</script>

<template>
  <div class="item">
    <div class="item__img">
      <u-img
        :src="`/images/magnets_${item.image}`"
        :alt="item.title"
      />
    </div>
    <div class="item__block">
      <div class="item__name">{{ item.title }}</div>
      <div
        v-if="item.size"
        class="item__size"
      >
        Розмір: <span>{{ item.size }}</span>
      </div>
    </div>
    <div class="item__order-block order-block">
      <div class="order-block__items">
        <button
          @click="decrementItem"
          class="order-block__item"
          :disabled="item.quantity <= 1"
        >
          —
        </button>
        <span class="order-block__counter">{{ item.quantity }}</span>
        <button
          @click="incrementItem"
          class="order-block__item"
        >
          +
        </button>
      </div>
      <div class="item__price">
        <span :class="{ 'item__price-old': item.newPrice }"> {{ item.price * item.quantity }} ₴ </span>
        <span
          v-if="item.newPrice"
          class="item__price-new"
        >
          {{ item.newPrice * item.quantity }} ₴
        </span>
      </div>
    </div>
    <button
      @click="onDelete"
      class="item__btn"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 3.5L4.125 13.5C4.15469 14.0778 4.575 14.5 5.125 14.5H10.875C11.4272 14.5 11.8397 14.0778 11.875 13.5L12.5 3.5"
          stroke="#989898"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.5 3.5H13.5H2.5Z"
          fill="#989898"
        />
        <path
          d="M2.5 3.5H13.5"
          stroke="#989898"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M10.25 5.5L10 12.5M6 3.5V2.25C5.99971 2.15143 6.01891 2.05377 6.0565 1.96265C6.09409 1.87152 6.14932 1.78873 6.21903 1.71903C6.28873 1.64933 6.37152 1.59409 6.46265 1.55651C6.55377 1.51892 6.65143 1.49971 6.75 1.5H9.25C9.34857 1.49971 9.44623 1.51892 9.53735 1.55651C9.62848 1.59409 9.71127 1.64933 9.78097 1.71903C9.85068 1.78873 9.90591 1.87152 9.9435 1.96265C9.98109 2.05377 10.0003 2.15143 10 2.25V3.5H6ZM8 5.5V12.5V5.5ZM5.75 5.5L6 12.5L5.75 5.5Z"
          stroke="#989898"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .item {
    font-family: var(--special-font);
    padding: 16px 24px 24px;
    display: grid;
    grid-template-columns: 1fr 300px 235px auto;
    align-items: center;
    gap: 24px;

    &__img {
      width: 152px;
      height: auto;
    }

    &__name {
      font-size: 0.875rem;
      line-height: 1.1875rem;
      white-space: nowrap;
    }
    &__size {
      margin-top: 8px;
      font-size: 0.875rem;
      line-height: 1.1875rem;
      color: var(--grey-dark);
      > span {
        color: var(--black);
        text-transform: uppercase;
      }
    }
    &__order-block {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    &__price {
      font-size: 1.125rem;
      line-height: 1.5625rem;

      &-old {
        margin: 0 4px 0 0;
        font-size: 0.875rem;
        line-height: 1.1875rem;
        font-weight: 300;
        text-decoration: line-through;
        color: var(--grey-dark);
      }
    }
    .order-block {
      &__items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 8px;
        width: 74px;
        height: 40px;
        border: 1px solid var(--grey-dark);
        border-radius: 5px;
        text-align: center;
        font-size: 1.125rem;
        line-height: 1.5625rem;
      }

      &__item {
        cursor: pointer;
        background: none;
        &:disabled {
          color: var(--grey-dark);
        }
      }
    }
    &__btn {
      background: transparent;
      cursor: pointer;
    }
  }
</style>
