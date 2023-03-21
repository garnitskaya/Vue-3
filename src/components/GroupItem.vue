<script setup>
import SocialLink from "@/components/SocialLink.vue";

const props = defineProps({
  item: {
    type: Array,
    required: true,
  },
});
</script>


<template>
  <div class="item">
    <div class="item__img">
      <u-img :src="`/images/about_${item.id}.jpg`" :alt="item.name" />
    </div>
    <div class="item__block">
      <h3 class="item__name">{{ item.name }}</h3>
      <div class="item__position">{{ item.position }}</div>
      <p class="item__text">{{ item.text }}</p>
      <div class="item__socials">
        <social-link
          v-for="link in [{ name: 'inst-black' }, { name: 'fb-black' }]"
          :key="link.name"
          :link="link"
        />
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  gap: 24px;
  &__img,
  &__block {
    flex: 1;
  }
  &:nth-child(even) .item__img {
    order: 1;
  }
  &__img {
  }
  &__block {
  }
  &__name {
    font-size: 20px;
    line-height: 28px;
  }
  &__position {
    margin-top: 5px;
    font-family: "Open Sans";
    font-size: 16px;
    line-height: 23px;
  }
  &__text {
    margin-top: 8px;
    font-family: "Open Sans";
    font-size: 16px;
    line-height: 23px;
  }
  &__socials {
    margin-top: 12px;
    display: flex;
    gap: 16px;
  }
}
</style>