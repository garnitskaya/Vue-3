<script setup>
import ButtonArrow from "@/components/ButtonArrow.vue";
</script>

<template>
  <div class="releases">
    <container
      class="releases__container"
      title="Релізи"
      :link="{ href: 'releases', label: 'Всі релізи' }"
      id="releases"
    >
      <div class="releases__wrap">
        <div class="releases__items">
          <a
            class="releases__item border-class"
            href="#"
            v-for="n in 6"
            :key="n"
          >
            <div class="releases__item-hover item">
              <div class="item__name">HELLO</div>
              <div class="item__years">(2019)</div>
            </div>

            <u-img :src="`/images/releases_${n}.png`" alt="releases" />
          </a>
        </div>
        <div class="releases__bnt btn-arrow">
          <button-arrow styles="left" position="center" />
          <button-arrow styles="right" position="center" />
        </div>
      </div>
    </container>
  </div>
</template>



<style lang="scss" >
.releases {
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
    justify-content: space-between;
    gap: 24px;
    @media (max-width: 1024px) {
      justify-content: center;
    }
    @media (max-width: 480px) {
      gap: 16px;
    }
  }

  &__item {
    position: relative;
    flex: 0 0 176px;
    height: 176px;
    @media (max-width: 992px) {
      flex: 0 0 160px;
      height: 160px;
    }

    .item {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.7);
      color: var(--white);
      opacity: 0;
      transition: 0.2s opacity;
      &:hover {
        opacity: 1;
      }
      &__name {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      &__years {
        font-family: var(--releases-font);
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.6875rem;
      }
    }
  }
}
</style>