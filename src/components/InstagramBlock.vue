<script setup>
import Container from "@/components/UI/Container.vue";
import UImg from "@/components/UI/UImg.vue";
</script>

<template>
  <div class="instagram-block" id="about">
    <container
      title="АНТИТІЛА в Instagram"
      :link="{ href: '#', label: 'Підписатися на Instagram' }"
    >
      <div class="instagram-block__items border-class">
        <a href="#" v-for="n in 10" :key="n" class="instagram-block__item">
          <u-img
            :src="`/images/instagram_${n}.jpg`"
            alt="АНТИТІЛА в Instagram"
          />
        </a>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.instagram-block {
  padding: 48px 0;
  &__items {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 1 1 calc(100% / 5);
  }
}
</style>