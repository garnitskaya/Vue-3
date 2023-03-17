<script setup>
const props = defineProps({
  styles: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <button :class="['btn', `btn_${styles}`, `btn_${size}`]">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  width: 138px;
  height: 40px;
  font-size: 1rem;
  line-height: 1.375rem;
  border-radius: 5px;
  transition: 0.2s all;

  &_warning {
    background: transparent;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: var(--red);
    text-transform: uppercase;
  }

  &_outlined {
    background: transparent;
    border: 1px solid var(--black);
    font-weight: 300;
  }

  &_red {
    background: var(--red);
    color: var(--white);
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
      background: transparent;
      border: 2px solid var(--black);
      color: var(--black);
    }
  }
  &_small {
    width: 100px;
    height: 28px;
    font-size: 0.75rem;
    line-height: 1.0625rem;
    cursor: pointer;
    &:hover {
      background: var(--red);
      color: var(--white);
      border-color: var(--red);
    }
  }
  &_big {
    width: 276px;
    @media (max-width: 768px) {
      width: 304px;
    }
  }
}
</style>