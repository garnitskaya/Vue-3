<script setup>
const props = defineProps({
  filters: {
    type: Array,
    required: true,
  },
  styles: {
    type: String,
    required: false,
  },
  filter: {
    type: String,
    default: "",
    validator(value) {
      return (
        ["", "alboms", "singles", "collaborations"].includes(value) ||
        [
          "",
          "new",
          "sale",
          "candies",
          "t-shirts",
          "posters",
          "accessories",
        ].includes(value)
      );
    },
  },
});
const emits = defineEmits(["changeFilter"]);

const filterChange = (name) => {
  //console.log(name);
  emits("changeFilter", name);
};
</script>

<template>
  <div :class="['filters', `filters-${styles}`]">
    <button
      @click="filterChange(filterBtn.name)"
      :class="[
        'filters__btn',
        `filters__btn-${styles}`,
        { active: filterBtn.name === filter },
      ]"
      v-for="filterBtn in filters"
      :key="filterBtn.name"
    >
      {{ filterBtn.label }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  &-store {
    @media (max-width: 480px) {
      gap: 16px;
    }
  }
  &__btn {
    background: none;
    cursor: pointer;
    border-bottom: 1.5px solid transparent;
    transition: border 0.4s;
    &:not(.active):hover {
      border-bottom: 1.5px solid var(--red);
    }
    &-releases {
      font-family: var(--special-font);
      font-size: 1rem;
      line-height: 1.4375rem;
      color: var(--grey-dark);
    }
    &-store {
      font-weight: 300;
      font-size: 1.125rem;
      line-height: 25px;
      text-transform: uppercase;
      &.active {
        color: var(--red) !important;
      }
    }
    &.active {
      color: var(--black);
    }
  }
}
</style>
