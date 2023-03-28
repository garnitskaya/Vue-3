<script setup>
const emits = defineEmits(["menuClick"]);

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
});

const clickOnMenu = () => {
  emits("menuClick");
};
</script>


<template>
  <div :class="['hamburger', `hamburger-${color}`]">
    <div
      :class="['hamburger__block', { active }, `hamburger__block-${color}`]"
      @click="clickOnMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="hamburger__label">
      {{ label }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  &-black {
    @media (min-width: 769px) {
      display: none;
    }
  }
  &__block {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 22px;
    height: 19px;

    span {
      display: block;
      width: 100%;
      height: 3px;
      border-radius: 2px;
      transition: all 0.2s;
    }
    &-white span {
      background-color: var(--white);
    }
    &-black span {
      background-color: var(--black);
    }
  }

  &__label {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--white);
    @media (max-width: 480px) {
      display: none;
    }
  }

  .active {
    span {
      &:nth-child(1) {
        background-color: var(--black);
        transform: translateY(9px) rotate(45deg);
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        background-color: var(--black);
        transform: translateY(-7px) rotate(-45deg);
      }
    }
  }
}
</style>