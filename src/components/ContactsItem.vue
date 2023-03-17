<script setup>
import SocialLink from "@/components/SocialLink.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const linksSocials = { name: "fb" };
</script>

<template>
  <div class="item">
    <div>
      <h4 class="item__title">{{ item.position }}</h4>
      <div class="item__name">{{ item.name }}</div>
    </div>

    <hr class="item__line" />

    <a class="item__phone" :href="`tel:${item.phone}`">
      <img src="/icons/phone.svg" alt="phone" />
      {{ item.phone }}
    </a>

    <div v-if="Array.isArray(item.email)" class="item__emails">
      <a
        v-for="email in item.email"
        :key="email"
        class="item__email"
        :href="`mailto:${email}`"
      >
        <img src="/icons/mail.svg" alt="mail" />
        {{ email }}
      </a>
    </div>

    <a v-else class="item__email" :href="`mailto:${item.email}`">
      <img src="/icons/mail.svg" alt="mail" />
      {{ item.email }}
    </a>

    <social-link :link="{ name: 'fb-black' }" />
  </div>
</template>


<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 52px;
  &__title {
    font-size: 18px;
    line-height: 25px;
  }
  &__name {
    margin-top: 8px;
  }
  &__line {
    width: 36px;
    height: 1px;
    background: var(--red);
  }
  &__emails {
    & > :last-child {
      margin-top: 12px;
    }
  }
  &__name,
  &__phone,
  &__email {
    display: block;
    font-family: "Open Sans";
    font-size: 16px;
    line-height: 23px;
  }
}
</style>