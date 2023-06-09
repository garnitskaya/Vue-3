<script setup>
  import SocialLink from '@/components/SocialLink.vue'

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div class="item">
    <div>
      <h4 class="item__title">{{ item.position }}</h4>
      <div class="item__name">{{ item.name }}</div>
    </div>

    <hr class="item__line" />

    <a
      class="item__phone"
      :href="`tel:${item.phone}`"
    >
      <img
        src="/icons/phone.svg"
        alt="phone"
      />
      {{ item.phone }}
    </a>

    <div
      v-if="Array.isArray(item.email)"
      class="item__emails"
    >
      <a
        v-for="email in item.email"
        :key="email"
        class="item__email"
        :href="`mailto:${email}`"
      >
        <img
          src="/icons/mail.svg"
          alt="mail"
        />
        {{ email }}
      </a>
    </div>

    <a
      v-else
      class="item__email"
      :href="`mailto:${item.email}`"
    >
      <img
        src="/icons/mail.svg"
        alt="mail"
      />
      {{ item.email }}
    </a>

    <social-link
      :link="{ name: 'facebook' }"
      fill="#2D2D2D"
      size="32"
    />
  </div>
</template>

<style lang="scss" scoped>
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (max-width: 576px) {
      gap: 8px;
    }
    &__title {
      font-size: 1.125rem;
      line-height: 1.5625rem;
    }
    &__name {
      margin-top: 8px;
    }
    &__line {
      width: 36px;
      height: 1px;
      background: var(--red);
      @media (max-width: 576px) {
        margin: 3px 0;
      }
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
      font-family: var(--special-font);
      font-size: 1rem;
      line-height: 1.4375rem;
    }
  }
</style>
