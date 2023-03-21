<script setup>
import { ref } from "vue";
import BannerBlock from "@/components/BannerBlock.vue";
import FiltersItem from "@/components/FiltersItem.vue";

const filter = ref("all");

const filterChange = (name) => {
  filter.value = name;
};
</script>

<template>
  <wrapper-page>
    <div class="releases">
      <container title="Релізи" mb="8">
        <filters-item :filter="filter" @changeFilter="filterChange" />
        <div class="releases__items">
          <div class="releases__item border-class" v-for="n in 10" :key="n">
            <div class="releases__item-hover item">
              <div class="item__name">HELLO</div>
              <div class="item__years">(2019)</div>
              <div class="item__title">Слухай альбом на:</div>
              <div class="item__icons">
                <img src="/icons/music.svg" alt="music" />
                <img src="/icons/spoty.svg" alt="spoty" />
              </div>
            </div>

            <u-img :src="`/images/releases_${n}.png`" alt="releases" />
          </div>
        </div>
      </container>
    </div>
  </wrapper-page>
</template>

<style lang="scss" scoped>
.releases {
  padding: 48px 0 100px;

  &__items {
    margin-top: 32px;
    display: grid;
    grid-template: auto / repeat(auto-fit, 276px);
    justify-content: center;
    gap: 24px;
  }
  &__item {
    width: 276px;
    height: 276px;
    .item {
      &__name {
        font-size: 1.875rem;
        line-height: 2.625rem;
      }
      &__title {
        margin-top: 30px;
        font-family: "Open Sans";
        font-size: 1rem;
        line-height: 1.4375rem;
      }
      &__icons {
        margin-top: 7px;
        display: flex;
        gap: 8px;
        > img {
          cursor: pointer;
        }
      }
    }
  }
}
</style>