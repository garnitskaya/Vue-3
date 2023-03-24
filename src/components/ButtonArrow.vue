<script setup>
const props = defineProps({
  styles: {
    type: String,
    validator(value) {
      return ["right", "left"].includes(value);
    },
  },
  position: {
    type: String,
    validator(value) {
      return ["center"].includes(value);
    },
  },
});
</script>

<template>
  <button :class="['btn', `btn-${styles}`, `btn-${position}`]">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1351_2251)">
        <circle
          cx="16"
          cy="16"
          r="16"
          transform="rotate(-180 16 16)"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M20 6.66992L11 15.6699L20 24.6699"
          stroke="#2D2D2D"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1351_2251">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(32) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  position: absolute;
  background: none;
  cursor: pointer;
  top: 28%;
  left: 8px;
  transition: 0.4s;
  &:hover {
    scale: 1.2;
    > svg circle {
      fill-opacity: 1;
    }
  }

  &-right {
    transform: rotate(180deg);
    right: 8px;
    left: auto;
  }
  &-right.btn-center {
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
  }
  &-left.btn-center {
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>