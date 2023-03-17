<script setup>
import Container from "@/components/UI/Container.vue";
import UImg from "@/components/UI/UImg.vue";

const arrPhotos = [
  {
    id: 1,
    text: "Тур Hello, Харків - 07.06.2019",
  },
  {
    id: 2,
    text: "Тур Hello, Львів - 25.05.2019",
  },
  {
    id: 3,
    text: "Тур HELLO, Київ - 16.11.2019",
  },
];
</script>

<template>
  <container
    title="Фото"
    :link="{
      href: '#',
      label: 'Всі фото',
    }"
    id="photo"
  >
    <div class="releases-block__photos photos">
      <div
        class="photos__wrap border-class"
        v-for="item in arrPhotos"
        :key="item.id"
      >
        <u-img :src="`/images/photo_${item.id}.jpg`" alt="photo" />
        <p class="photos__title">
          {{ item.text }}
        </p>
      </div>
    </div>
  </container>
</template>

<style lang="scss" scoped>
.photos {
  max-height: 450px;
  display: grid;
  grid-template: repeat(2, 1fr) / 66% 1fr;
  gap: 24px;
  & :first-child {
    grid-row: 1/ 3;
  }
  &__wrap {
    position: relative;
    max-height: 450px;
  }

  &__title {
    width: 100%;
    position: absolute;
    bottom: 16px;
    font-family: "Open Sans";
    font-size: 16px;
    line-height: 23px;
    color: var(--white);
    text-align: center;
  }
}
</style>