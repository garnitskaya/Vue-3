<script>
import { defineComponent } from "vue";
import BannerBlock from "@/components/BannerBlock.vue";

export default defineComponent({
  components: { BannerBlock },
  name: "wrapper-page",
  props: {
    p: {
      type: String,
    },
    banner: {
      type: String,
      default: "bg",
    },
  },
});
</script>

<template>
  <div class="wrapper-page" :style="{ padding: p }">
    <banner-block :img="`/images/${banner}.jpg`" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper-page {
  padding: 0 0 52px 0;
}
</style>