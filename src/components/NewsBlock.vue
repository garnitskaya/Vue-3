<script setup>
import Container from "@/components/UI/Container.vue";
import NewItem from "@/components/NewItem.vue";

const items = [
  {
    id: 1,
    title: "Все буде так, як ти захочеш!",
    text: "Антитіла та Марина Бех-Романчук прожили у кадрі ціле життя. Гучна прем’єра від гурту Антитіла. Після танцювальної пісні «Маскарад» [...]",
    data: "10.10.2021",
  },
  {
    id: 2,
    title: "МАСКАРАД - ПРЕМ'ЄРА",
    text: "ПРЕМ’ЄРА! МАСКАРАД! Вже на нашому каналі. Більше п‘ятисот людей в кадрі в образах зомбі, сотні костюмів, кілограми гриму та про [...]",
    data: "10.10.2021",
  },
  {
    id: 3,
    title: "День Народження Антитіла - 13 років",
    text: "Нам 13 років! Так, два свята в родині АНТИТІЛА в один день!",
    data: "10.10.2021",
  },
  {
    id: 3,
    title: "День Народження Антитіла - 13 років",
    text: "Нам 13 років! Так, два свята в родині АНТИТІЛА в один день!",
    data: "10.10.2021",
  },
];
</script>

<template>
  <div class="new-block grey-bg" id="news">
    <container title="Новини" :link="{ href: '#', label: 'Всі новини' }">
      <div class="new-block__items">
        <new-item v-for="item in items" :key="item" :item="item" />
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.new-block {
  &__items {
    display: grid;
    grid-template: 1fr / repeat(4, 1fr);
    gap: 24px;
  }
}
</style>