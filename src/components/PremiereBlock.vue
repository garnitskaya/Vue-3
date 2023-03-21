<script setup>
</script>

<template>
  <div class="premiere-block">
    <div class="premiere-block__img border-class">
      <u-img src="/images/premiere_item.jpg" alt="premiere_item" />
    </div>
    <div class="premiere-block__item">
      <h3 class="premiere-block__title">ПРЕМ’ЄРА!</h3>
      <p class="premiere-block__subtitle">Дивись на YouTube!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.premiere-block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 66px;
  padding: 48px 0;
  background: url("/images/premiere_bg.jpg") center/ cover no-repeat;
  color: var(--white);
  &__img {
    width: 334px;
    height: 334px;
  }
  &__title {
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 3.4375rem;
  }
  &__subtitle {
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.75rem;
  }
}
</style>