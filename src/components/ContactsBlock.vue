<script setup>
import ContactsItem from "@/components/ContactsItem.vue";

const contactsItems = [
  {
    id: 1,
    position: "Директор",
    name: "Сергій Вусик",
    phone: "+38(068)891-19-12",
    email: "vusonsergey@gmail.com",
    fb: "facebook.com",
  },
  {
    id: 2,
    position: "Концерти закордоном",
    name: "Євген Антипенко",
    phone: "+38(067)462-14-50",
    email: "onegintwins@gmail.com",
    fb: "facebook.com",
  },
  {
    id: 3,
    position: "PR",
    name: "Анна Долинська",
    phone: " +38(063)843-85-30",
    email: ["pr@antytila.com", "dolynskapr@gmail.com"],
    fb: "facebook.com",
  },
  {
    id: 4,
    position: "Звукорежисер",
    name: "Дмитро Нужний",
    phone: "+38(067)596-56-26",
    email: "mail2phoenix@yahoo.com",
    fb: "facebook.com",
  },
];
</script>

<template>
  <div class="contacts-block grey-bg" id="contacts">
    <container title="Контакти">
      <div class="contacts-block__items">
        <contacts-item
          v-for="item in contactsItems"
          :key="item.id"
          :item="item"
        />
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.contacts-block {
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 276px);
    justify-content: space-between;
    gap: 24px;
    text-align: center;
  }
}
</style>