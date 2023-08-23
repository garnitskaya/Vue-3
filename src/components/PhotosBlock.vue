<script setup>
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
  max-height: 100%;
  display: grid;
  grid-template: repeat(2, 1fr) / 66% 1fr;
  gap: 24px;
  & :first-child {
    grid-row: 1/ 3;

    @media (max-width: 768px) {
      grid-row: 1/ 2;
      grid-column: 1/ 3;
    }
    @media (max-width: 576px) {
      grid-column: 1/ 2;
    }
  }
  @media (max-width: 768px) {
    max-height: 632px;
    grid-template: 65.5% 1fr / repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    max-height: 100%;
    grid-template: 1fr / 1fr;
    gap: 16px;
  }
  &__wrap {
    position: relative;
  }

  &__title {
    width: 100%;
    position: absolute;
    bottom: 16px;
    font-family: var(--special-font);
    font-size: 1rem;
    line-height: 1.4375rem;
    color: var(--white);
    text-align: center;
  }
}
</style>
