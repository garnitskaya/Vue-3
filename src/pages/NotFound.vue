<script setup>
import WrapPage from "@/components/WrapPage.vue";
</script>

<template>
  <wrap-page>
    <div class="notfound__wrap">
      <div class="notfound__block">
        <span>4</span>
        <div class="notfound__img">
          <u-img src="/images/disc.png" alt="Antitela" />
        </div>
        <span>4</span>
      </div>
      <p class="notfound__text">
        Схоже, ми не можемо знайти сторінку, яку вишукаєте.
      </p>
      <u-button @click="$router.push('/')" size="big" styles="red">
        Повернутися на головну
      </u-button>
    </div>
  </wrap-page>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";

.notfound {
  &__wrap {
    @include flex(normal, center);
    flex-direction: column;
  }

  &__block {
    @include flex(center, center);
    gap: 24px;

    @media (max-width: 768px) {
      gap: 16px;
    }

    @media (max-width: 480px) {
      gap: 8px;
    }

    span {
      font-family: var(--special-font);
      font-weight: 700;
      font-size: 25rem;

      @media (max-width: 768px) {
        font-size: 13.75rem;
      }

      @media (max-width: 480px) {
        font-size: 8.75rem;
      }
    }
  }

  &__img {
    max-width: 350px;
    max-height: 350px;

    @media (max-width: 768px) {
      max-width: 200px;
      max-height: 200px;
    }

    @media (max-width: 480px) {
      max-width: 120px;
      max-height: 120px;
    }
  }

  &__text {
    margin-bottom: 38px;
    font-family: var(--special-font);
    font-size: 1rem;
    line-height: 1.4375rem;

    @media (max-width: 768px) {
      margin: 17px 0 34px;
    }

    @media (max-width: 480px) {
      margin: 11px 0 20px;
      text-align: center;
    }
  }
}
</style>
