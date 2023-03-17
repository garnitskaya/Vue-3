<script setup>
import { ref } from "vue";
import SocialLink from "@/components/SocialLink.vue";

const props = defineProps({
  linksSocials: {
    type: Array,
    required: true,
  },
});

const activeBurger = ref(false);
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="hamburger">
        <div
          :class="[
            'hamburger__block',
            { hamburger__block_active: activeBurger },
          ]"
          @click="activeBurger = !activeBurger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="hamburger__label">Меню</div>
      </div>
      <div class="header__links">
        <social-link
          v-for="link in linksSocials"
          :key="link.name"
          :link="link"
        />
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  z-index: 10;

  &__container {
    width: calc(1214px + 30px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    gap: 24px;
  }
}

.hamburger {
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;

  &__block {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 22px;
    height: 19px;

    &_active {
      span {
        &:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      }
    }

    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--white);
      border-radius: 2px;
      transition: all 0.2s;
    }
  }

  &__label {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--white);
  }
}
</style>