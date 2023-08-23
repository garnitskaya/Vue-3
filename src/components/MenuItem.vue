<script setup>
import SocialLink from "@/components/SocialLink.vue";

const emits = defineEmits(["openMenu"]);

const props = defineProps({
  active: {
    type: Boolean,
  },
  linksSocials: {
    type: Array,
  },
});

const openMenu = () => {
  emits("openMenu");
};

const links = [
  { name: "Головна", id: "/" },
  { name: "Концерти", id: "/#concerts" },
  { name: "Релізи", id: "/#releases" },
  { name: "Новини", id: "/#news" },
  { name: "Мерч", id: "/#merch" },
  { name: "Відео", id: "/#video" },
  { name: "Фото", id: "/#photo" },
  { name: "Про гурт", id: "/about" },
  { name: "Контакти", id: "/#contacts" },
  { name: "Фантитіла", id: "/#fantytila" },
];
</script>

<template>
  <nav :class="['menu', { active: active }]">
    <div class="menu__links">
      <a
        @click="openMenu"
        v-for="link in links"
        :key="link"
        :href="link.id"
        class="menu__link"
      >
        {{ link.name }}
      </a>
    </div>
    <div class="menu__lang">
      <img src="/icons/ua.svg" alt="ua" />
      <img src="/icons/gb.svg" alt="eng" />
    </div>
    <div class="menu__icons">
      <social-link
        v-for="link in linksSocials"
        :key="link.name"
        :link="link"
        fill="#2D2D2D"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  padding: 90px 60px;
  position: absolute;
  top: 0;
  left: -60px;
  width: 408px;
  background: var(--white);
  z-index: 0;
  transition: 0.4s all;
  transform: translateX(-100%);
  opacity: 0;
  border: 1px solid var(--grey-dark);

  @media (max-width: 768px) {
    padding: 70px 28px;
    width: 372px;
    top: -15px;
    left: -30px;
    height: 100vh;
  }

  @media (max-width: 480px) {
    padding: 58px 20px;
    width: 268px;
    left: -20px;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__link {
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.0625rem;
    transition: 0.2s color;

    &:hover {
      color: var(--red);
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
      line-height: 1.6875rem;
    }
  }

  &__lang {
    margin-top: 16px;

    > img {
      cursor: pointer;
    }

    :first-child {
      margin-right: 24px;
    }
  }

  &__icons {
    margin-top: 16px;
    display: flex;
    gap: 24px;

    @media (max-width: 480px) {
      gap: 16px;
    }
  }

  &.active {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
