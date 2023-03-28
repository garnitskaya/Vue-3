<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import SocialLink from "@/components/SocialLink.vue";
import MenuItem from "@/components/MenuItem.vue";
import Hamburger from "@/components/Hamburger.vue";

const props = defineProps({
  linksSocials: {
    type: Array,
    required: true,
  },
});

const isMenuOpen = ref(false);
const menuContainer = ref(null);

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleDocumentClick = (event) => {
  if (!menuContainer.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div ref="menuContainer" class="header__menu-wrap">
        <menu-item
          :active="isMenuOpen"
          @openMenu="openMenu"
          :linksSocials="linksSocials"
        />
        <hamburger
          color="white"
          label="Menu"
          :active="isMenuOpen"
          @menuClick="openMenu"
        />
      </div>
      <div class="header__links">
        <social-link
          v-for="link in linksSocials"
          :key="link.name"
          :link="link"
        />
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  z-index: 10;
  @media (max-width: 768px) {
    height: 70px;
    padding: 15px 30px;
  }
  @media (max-width: 480px) {
    height: 48px;
    padding: 12px 20px;
  }
  &__container {
    position: relative;
    width: calc(1214px + 30px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      align-items: flex-start;
    }
  }

  &__links {
    display: flex;
    gap: 24px;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>