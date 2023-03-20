<script setup>
const props = defineProps({
  filter: {
    type: String,
    default: "all",
  },
});
const emits = defineEmits(["changeFilter"]);

const filtersBtn = [
  { name: "all", label: "Все" },
  { name: "alboms", label: "Альбоми" },
  { name: "singles", label: "Сингли" },
  { name: "collaborations", label: "Колаборації" },
];

const filterChange = (name) => {
  console.log(name);
  emits("changeFilter", name);
};
</script>

<template>
  <div class="filters">
    <button
      @click="filterChange(filterBtn.name)"
      :class="['filters__btn', { active: filterBtn.name === filter }]"
      v-for="filterBtn in filtersBtn"
      :key="filterBtn.name"
    >
      {{ filterBtn.label }}
    </button>
  </div>
</template>


<style lang="scss" scoped>
.filters {
  display: flex;
  justify-content: center;
  gap: 24px;
  &__btn {
    font-family: "Open Sans";
    font-size: 1rem;
    line-height: 1.4375rem;
    background: none;
    color: var(--grey-dark);
    cursor: pointer;
    &.active {
      color: var(--black);
    }
  }
}
</style>