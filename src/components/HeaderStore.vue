<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import MenuLink from "@/components/MenuLink.vue";
import Hamburger from "@/components/Hamburger.vue";
import useOpenMenu from "@/hooks/useOpenMenu";

const links = [
  { name: "Оплата і доставка", to: "" },
  { name: "Контакти", to: "#" },
  { name: "Угода користувача", to: "#" },
];
const { isMenuOpen, openMenu } = useOpenMenu();
const { getters } = useStore();
const cartItems = computed(() => getters.cart);
</script>

<template>
  <div class="header-store">
    <router-link
      v-if="$route.path !== '/store' && $route.path !== '/store/'"
      to="/"
      class="header-store__logo"
    >
      <u-img src="/images/Antitela.png" alt="logo" />
    </router-link>

    <container>
      <div class="header-store__wrap">
        <hamburger color="black" :active="isMenuOpen" @menuClick="openMenu" />
        <div :class="['header-store__menu', { active: isMenuOpen }]">
          <menu-link
            v-for="link in links.slice(0, 2)"
            :key="link.name"
            :link="link"
          />
        </div>

        <div class="header-store__icons">
          <div class="header-store__search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3V3Z"
                stroke="#2D2D2D"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M15.8616 15.8579L21.0042 21.0006"
                stroke="#2D2D2D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <router-link to="/cart" class="header-store__cart">
            <span
              :class="[
                'header-store__quantity',
                { 'header-store__quantity-big': cartItems.length > 9 },
              ]"
              v-if="cartItems.length > 0"
            >
              {{ cartItems.length }}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.20338 8.99951C2.95131 8.99926 2.70935 9.09864 2.53023 9.276C2.35111 9.45336 2.24935 9.69432 2.24713 9.94639C2.24611 10.0338 2.25876 10.1207 2.28463 10.2042L4.70807 18.7495C4.82039 19.1487 5.06043 19.5 5.39145 19.7498C5.72247 19.9995 6.12622 20.1339 6.54088 20.1323H17.4534C17.8688 20.1327 18.2732 19.998 18.6054 19.7486C18.9377 19.4992 19.1799 19.1486 19.2956 18.7495L21.719 10.2042L21.7471 9.94639C21.7449 9.69432 21.6431 9.45336 21.464 9.276C21.2849 9.09864 21.043 8.99926 20.7909 8.99951H3.20338ZM12.2653 16.5028C11.8756 16.5008 11.4953 16.3835 11.1723 16.1657C10.8493 15.9478 10.5981 15.6391 10.4504 15.2786C10.3026 14.9181 10.265 14.5219 10.3422 14.14C10.4194 13.7582 10.608 13.4077 10.8841 13.1329C11.1603 12.8581 11.5117 12.6712 11.894 12.5959C12.2762 12.5206 12.6722 12.5603 13.032 12.7098C13.3918 12.8593 13.6992 13.1121 13.9155 13.4362C14.1317 13.7603 14.2471 14.1412 14.2471 14.5308C14.2447 15.0547 14.0347 15.5564 13.6633 15.9259C13.2919 16.2955 12.7892 16.5029 12.2653 16.5028V16.5028Z"
                stroke="#2D2D2D"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M7.50293 8.99951L12.0029 2.99951L16.5029 8.99951"
                stroke="#2D2D2D"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.header-store {
  position: absolute;
  width: 100%;
  height: 60px;
  padding: 17px 0;
  border-bottom: 1px solid var(--grey-dark);
  z-index: 10;
  @media (max-width: 480px) {
    height: 48px;
    padding: 12px 0;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    width: 115px;
    height: 60px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    @media (max-width: 480px) {
      top: 2px;
      width: 94px;
      height: 46px;
    }
  }
  &__menu {
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    transition: 0.3s all;
    & :first-child {
      margin: 0 24px 0 0;
    }
    @media (max-width: 768px) {
      flex: 1;
      opacity: 0;
      &.active {
        opacity: 1;
      }
    }
  }
  &__icons {
    display: flex;
    gap: 24px;
    @media (max-width: 480px) {
      gap: 16px;
    }
  }
  &__search,
  &__cart {
    cursor: pointer;
  }
  &__cart {
    position: relative;
  }
  &__quantity {
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    position: absolute;
    right: -2px;
    top: -2px;
    font-family: var(--num-font);
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--white);
    background: var(--red);
    border-radius: 50%;
    border: 1px solid var(--grey);
    &-big {
      width: 17px;
      height: 17px;
      right: -4px;
      top: -4px;
    }
  }
}
</style>