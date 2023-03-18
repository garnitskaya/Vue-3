<script setup>
import Container from "@/components/UI/Container.vue";
import ConcertItem from "@/components/ConcertItem.vue";

const props = defineProps({
  quantity: {
    type: Number,
    default: -1,
  },
  link: {
    type: Boolean,
    default: false,
  },
});

const items = [
  {
    id: 1,
    date: ["3", "червня"],
    city: "Харків",
    place: "Палац спорту",
    active: true,
    canceled: false,
    delayed: false,
    soldout: false,
  },
  {
    id: 2,
    date: ["4", "червня"],
    city: "Харків",
    place: "Палац спорту",
    active: false,
    canceled: true,
    delayed: false,
  },
  {
    id: 3,
    date: ["5", "червня"],
    city: "Харків",
    place: "Палац спорту",
    active: false,
    canceled: false,
    delayed: true,
  },
  {
    id: 4,
    date: ["3", "липня"],
    city: "Харків",
    place: "Палац спорту",
    active: false,
    canceled: false,
    delayed: false,
  },
  {
    id: 5,
    date: ["23", "липня"],
    city: "Харків",
    place: "Палац спорту",
    active: true,
    canceled: false,
    delayed: false,
  },
  {
    id: 6,
    date: ["23", "серпня"],
    city: "Харків",
    place: "Палац спорту",
    active: false,
    canceled: false,
    delayed: false,
  },
  {
    id: 7,
    date: ["1", "вересня"],
    city: "Харків",
    place: "Палац спорту",
    active: true,
    canceled: false,
    delayed: false,
  },

  {
    id: 8,
    date: ["3", "вересня"],
    city: "Харків",
    place: "Палац спорту",
    active: true,
    canceled: false,
    delayed: false,
  },
  {
    id: 9,
    date: ["23", "вересня"],
    city: "Харків",
    place: "Палац спорту",
    active: true,
    canceled: false,
    delayed: false,
  },
  {
    id: 10,
    date: ["5", "жовтня"],
    city: "Харків",
    place: "Палац спорту",
    active: false,
    canceled: false,
    delayed: true,
  },
  {
    id: 11,
    date: ["3", "жовтня"],
    city: "Харків",
    place: "Палац спорту",
    active: false,
    canceled: false,
    delayed: false,
  },
  {
    id: 12,
    date: ["23", "грудня"],
    city: "Харків",
    place: "Палац спорту",
    active: false,
    canceled: false,
    delayed: false,
  },
];
</script>

<template>
  <div id="concerts" class="concerts-block">
    <container
      title="Концерти"
      :link="link && { href: 'concerts', label: 'Всі дати' }"
    >
      <div class="concerts-block__items">
        <concert-item
          v-for="item in items.slice(0, quantity)"
          :key="item.id"
          :item="item"
        />
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.concerts-block {
  padding: 48px 0;

  &__items {
    display: grid;
    grid-template: auto / 576px;
    row-gap: 32px;
    justify-content: center;
  }
}
</style>