<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  btn: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="banner">
    <h1></h1>
    <u-img :src="img" alt="banner" />

    <a href="#concerts" v-if="btn" class="banner__btn">
      <svg
        class="arrow-down"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.402 14.8894L16.7689 20.4575C16.6751 20.5703 16.5576 20.6611 16.4247 20.7234C16.2918 20.7857 16.1469 20.818 16.0002 20.818C15.8534 20.818 15.7085 20.7857 15.5756 20.7234C15.4428 20.6611 15.3253 20.5703 15.2314 20.4575L10.5983 14.8894C10.4769 14.7434 10.3995 14.5658 10.3753 14.3774C10.3511 14.189 10.3811 13.9977 10.4617 13.8257C10.5422 13.6537 10.6701 13.5083 10.8303 13.4063C10.9906 13.3044 11.1765 13.2501 11.3664 13.25H20.6339C20.8238 13.2501 21.0098 13.3044 21.17 13.4063C21.3302 13.5083 21.4581 13.6537 21.5387 13.8257C21.6193 13.9977 21.6492 14.189 21.625 14.3774C21.6008 14.5658 21.5235 14.7434 21.402 14.8894Z"
          fill="white"
        />
        <path
          d="M28 16C28 9.375 22.625 4 16 4C9.375 4 4 9.375 4 16C4 22.625 9.375 28 16 28C22.625 28 28 22.625 28 16Z"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  max-width: 100%;
  max-height: 100%;

  &__btn {
    width: 32px;
    height: 32px;
    background: none;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    .arrow-down {
      bottom: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    @keyframes arrow {
      0% {
        bottom: 0;
        opacity: 1;
      }
      25% {
        bottom: -15px;
        opacity: 0.2;
      }
      50% {
        bottom: 0;
        opacity: 1;
      }
      75% {
        bottom: -15px;
        opacity: 0.2;
      }
      100% {
        bottom: 0;
        opacity: 1;
      }
    }

    &:hover .arrow-down {
      animation: arrow 1.5s linear infinite;
    }
    @media (max-width: 768px) {
      bottom: 24px;
    }
    @media (max-width: 480px) {
      bottom: 16px;
    }
  }
}
</style>
