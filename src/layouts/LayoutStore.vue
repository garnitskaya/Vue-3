<script>
import { defineComponent } from "vue";
import HeaderStore from "@/components/HeaderStore.vue";
import FooterBlock from "@/components/FooterBlock.vue";

export default defineComponent({
  name: "store-layout",
  components: { HeaderStore, FooterBlock },
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
  <header-store :linksSocials="linksSocials" />
  <main class="main-container">
    <slot />
  </main>
  <footer-block menu :linksSocials="linksSocials" />
</template>

<style lang="scss" scoped>
.main-container {
  flex: 1;
  background: var(--bg-grey);
  padding: 0 0 100px 0;
  @media (max-width: 768px) {
    padding: 0 0 70px 0;
  }
}
</style>
