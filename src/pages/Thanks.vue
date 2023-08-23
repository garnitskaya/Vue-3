<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import WrapPage from "@/components/WrapPage.vue";
import SocialLink from "@/components/SocialLink.vue";
import ThanksSkeleton from "@/components/ThanksSkeleton.vue";

const linksSocials = [
  { name: "youtube", to: "#" },
  { name: "spotify", to: "#" },
  { name: "music", to: "#" },
  { name: "facebook", to: "#" },
  { name: "instagram", to: "#" },
];
const { getters } = useStore();
const isLoading = computed(() => getters.isLoading);
</script>

<template>
  <wrap-page class="thanks">
    <div v-if="!isLoading" class="thanks__wrap">
      <div class="thanks__img">
        <u-img src="/icons/check-circle.png" alt="check" />
      </div>

      <div class="thanks__block">
        <h1 class="thanks__title">ДЯКУЄМО ЗА ЗАМОВЛЕННЯ!</h1>
        <p class="thanks__text">Слідкуй за нами у соціальних мережах:</p>
        <div class="thanks__links">
          <social-link
            v-for="link in linksSocials"
            :key="link.name"
            :link="link"
            fill="#2D2D2D"
          />
        </div>
      </div>
      <u-button @click="$router.push('/')" size="big" styles="red">
        Повернутися на головну
      </u-button>
    </div>
    <div class="thanks__wrap" v-else>
      <thanks-skeleton />
    </div>
  </wrap-page>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.thanks {
  &__wrap {
    padding: 80px 0;
    @include flex(normal, center);
    flex-direction: column;
    gap: 40px;
    @media (max-width: 768px) {
      padding: 100px 0;
    }
    @media (max-width: 576px) {
      padding: 66px 0;
      gap: 20px;
    }
  }

  &__img {
    width: 125px;
    height: 125px;
    @media (max-width: 576px) {
      width: 73px;
      height: 73px;
    }
  }

  &__block {
    @media (max-width: 768px) {
      margin: 20px 0 0;
    }
    @media (max-width: 576px) {
      margin: 0 0 8px;
    }
  }

  &__title {
    text-align: center;
    font-size: 2.25rem;
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  &__text {
    margin: 20px 0 0;
    color: #000;
    font-size: 1.125rem;
    font-weight: 200;
    text-align: center;
  }

  &__links {
    margin: 16px 0 0;
    @include flex(center);
    gap: 24px;
    @media (max-width: 576px) {
      margin: 12px 0 0;
    }
  }
}
</style>
