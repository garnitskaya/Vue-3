<script setup>
</script>

<template>
  <container
    title="Релізи"
    :link="{ href: 'releases', label: 'Всі релізи' }"
    id="releases"
  >
    <div class="releases__items">
      <a class="releases__item border-class" href="#" v-for="n in 6" :key="n">
        <div class="releases__item-hover item">
          <div class="item__name">HELLO</div>
          <div class="item__years">(2019)</div>
        </div>

        <u-img :src="`/images/releases_${n}.png`" alt="releases" />
      </a>
    </div>
  </container>
</template>



<style lang="scss" >
.releases {
  &__items {
    display: flex;
    justify-content: space-between;
  }

  &__item {
    position: relative;
    width: 176px;
    height: 176px;

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
        font-family: "Noto Sans", sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.6875rem;
      }
    }
  }
}
</style>