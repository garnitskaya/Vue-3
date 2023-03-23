<script setup>
</script>

<template>
  <div class="notfound">
    <div class="notfound__logo">
      <u-img src="/images/Antitela.png" alt="logo" />
    </div>
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
</template>

<style lang="scss" scoped>
.notfound {
  padding: 0 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  @media (max-width: 480px) {
    padding: 0 36px;
  }
  &__logo {
    margin-bottom: 12px;
    max-width: 157px;
    max-height: 100px;
    @media (max-width: 768px) {
      margin-bottom: 22%;
      max-width: 141px;
      max-height: 90px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30%;
      max-width: 94px;
      max-height: 60px;
    }
  }
  &__block {
    display: flex;
    align-items: center;
    gap: 24px;
    @media (max-width: 768px) {
      gap: 16px;
    }
    @media (max-width: 480px) {
      gap: 8px;
    }
    span {
      font-family: "Open Sans";
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
    font-family: "Open Sans";
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
