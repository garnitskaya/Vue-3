<script setup>
import MerchItem from "@/components/MerchItem.vue";

const items = [
  {
    id: 1,
    title: "Магніт «АНТИТІЛА» 10Х6СМ",
    price: 300,
    status: "new",
  },
  {
    id: 2,
    title: "Футболка «Дельфіни» (чорна, чоловіча)",
    price: 300,
    status: "empty",
  },
  {
    id: 3,
    title: "Магніт «Антитіла HELLO» 9х6см",
    price: 30,
    status: "empty",
  },
  {
    id: 4,
    title: "Футболка «A» (червона, unisex)",
    price: 350,
    newPrice: 300,
    status: "sale",
  },
];
</script>

<template>
  <div class="merch-block wrap-content" id="merch">
    <container
      class="merch-block__container"
      title="Мерч"
      :link="{ href: '#', label: 'Переглянути весь мерч' }"
    >
      <div class="merch-block__wrap">
        <div class="merch-block__items">
          <merch-item
            class="merch-block__item"
            v-for="item in items"
            :key="item"
            :item="item"
          />
        </div>
        <div class="merch-block__bnt btn">
          <button class="btn__left">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1351_2251)">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  transform="rotate(-180 16 16)"
                  fill="white"
                  fill-opacity="0.6"
                />
                <path
                  d="M20 6.66992L11 15.6699L20 24.6699"
                  stroke="#2D2D2D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1351_2251">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(32) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button class="btn__right">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1351_2248)">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="white"
                  fill-opacity="0.6"
                />
                <path
                  d="M12 25.334L21 16.334L12 7.33398"
                  stroke="#2D2D2D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1351_2248">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0 32) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </container>
  </div>
</template>



<style lang="scss" scoped>
.merch-block {
  background: var(--bg-grey);
  &__container {
    @media (max-width: 1024px) {
      padding: 0 !important;
    }
  }
  &__wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  &__items {
    width: 100%;
    display: flex;
    gap: 24px;
    @media (max-width: 1024px) {
      justify-content: center;
    }
    @media (max-width: 576px) {
      gap: 16px;
    }
  }
  &__item {
    flex: 1;
    @media (max-width: 992px) {
      flex: 0 0 276px;
    }
    @media (max-width: 480px) {
      flex: 0 0 160px;
    }
  }
  .btn {
    display: none;

    @media (max-width: 1024px) {
      display: block;
    }

    &__left,
    &__right {
      position: absolute;
      background: none;
      cursor: pointer;
      top: 28%;
      left: 8px;
      transition: 0.4s;
      &:hover {
        scale: 1.2;
        > svg circle {
          fill-opacity: 1;
        }
      }
    }
    &__right {
      right: 8px;
      left: auto;
    }
  }
}
</style>