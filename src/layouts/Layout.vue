<script>
import { defineComponent } from "vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterBlock from "@/components/FooterBlock.vue";

export default defineComponent({
  name: "default-layout",
  components: { HeaderMenu, FooterBlock },
  props: {
    menu: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const linksSocials = [
      { name: "youtube", to: "#" },
      { name: "spotify", to: "#" },
      { name: "music", to: "#" },
      { name: "facebook", to: "#" },
      { name: "instagram", to: "#" },
    ];

    return { linksSocials };
  },
});
</script>

<template>
  <header-menu v-if="menu" :linksSocials="linksSocials" />
  <main class="main-container">
    <slot />
  </main>
  <footer-block :linksSocials="linksSocials" />
</template>

<style lang="scss">
.main-container {
  flex: 1;
}
</style>
