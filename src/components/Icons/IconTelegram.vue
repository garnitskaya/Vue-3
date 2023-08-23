<script setup>
const props = defineProps({
  fill: {
    type: String,
    default: "#fff",
  },
  size: {
    type: String,
    default: "32",
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1677_4835)">
      <path
        d="M16.0003 29.3346C8.63633 29.3346 2.66699 23.3653 2.66699 16.0013C2.66699 8.6373 8.63633 2.66797 16.0003 2.66797C23.3643 2.66797 29.3337 8.6373 29.3337 16.0013C29.3337 23.3653 23.3643 29.3346 16.0003 29.3346ZM11.8537 17.5613L11.871 17.552L13.031 21.3786C13.1803 21.7933 13.3857 21.868 13.635 21.8333C13.8857 21.8 14.0177 21.6653 14.1817 21.508L15.7657 19.9773L19.1657 22.4946C19.787 22.8373 20.2337 22.66 20.3883 21.9186L22.5977 11.4893C22.8417 10.5186 22.415 10.1293 21.6617 10.4386L8.68433 15.452C7.79899 15.8066 7.80433 16.3026 8.52433 16.5226L11.8537 17.5626V17.5613Z"
        :fill="fill"
      />
    </g>
    <defs>
      <clipPath id="clip0_1677_4835">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<style lang="scss" scoped></style>
