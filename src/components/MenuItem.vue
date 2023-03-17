<script setup>
const emits = defineEmits(["openMenu"]);

const props = defineProps({
  active: {
    type: Boolean,
  },
});

const openMenu = () => {
  emits("openMenu");
};

const links = [
  { name: "Головна", id: "/" },
  { name: "Концерти", id: "#concerts" },
  { name: "Релізи", id: "#releases" },
  { name: "Новини", id: "#news" },
  { name: "Мерч", id: "#merch" },
  { name: "Відео", id: "#video" },
  { name: "Фото", id: "#photo" },
  { name: "Про гурт", id: "#about" },
  { name: "Контакти", id: "#contacts" },
  { name: "Фантитіла", id: "#fantytila" },
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
  &.active {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>