<script setup>
const props = defineProps({
  quantity: {
    type: Number,
    default: 10,
  },
});
</script>

<template>
  <div class="instagram-block wrap-content" id="about">
    <container
      title="АНТИТІЛА в Instagram"
      :link="{ href: '#', label: 'Підписатися на Instagram' }"
    >
      <div class="instagram-block__items border-class">
        <a
          href="#"
          v-for="n in quantity"
          :key="n"
          class="instagram-block__item"
        >
          <u-img
            :src="`/images/instagram_${n}.jpg`"
            alt="АНТИТІЛА в Instagram"
          />
        </a>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.instagram-block {
  &__items {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 1 1 calc(100% / 5);
    @media (max-width: 768px) {
      flex: 1 1 calc(100% / 4);
    }
  }
}
</style>