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
    <div class="item__img border-class">
      <u-img :src="`/images/about_${item.id}.jpg`" :alt="item.name" />
    </div>
    <div class="item__block">
      <h3 class="item__name">{{ item.name }}</h3>
      <div class="item__position">{{ item.position }}</div>
      <p class="item__text">{{ item.text }}</p>
      <div class="item__socials">
        <social-link
          v-for="link in [{ name: 'instagram' }, { name: 'facebook' }]"
          :key="link.name"
          :link="link"
          fill=" #2D2D2D"
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
  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 16px;
  }
  &__img,
  &__block {
    flex: 1;
  }
  &__img {
    @media (max-width: 768px) {
      flex: 0 1 36%;
    }
    @media (max-width: 480px) {
      flex: 1 1 100%;
    }
  }
  &:nth-child(even) .item__img {
    order: 1;
    @media (max-width: 480px) {
      order: 0;
    }
  }
  &__img {
    @media (max-width: 768px) {
      height: 280px;
    }
    @media (max-width: 480px) {
      height: 196px;
    }
  }
  &__block {
  }
  &__name {
    font-size: 20px;
    line-height: 28px;
  }
  &__position {
    margin-top: 5px;
    font-family: var(--special-font);
    font-size: 16px;
    line-height: 23px;
  }
  &__text {
    margin-top: 8px;
    font-family: var(--special-font);
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