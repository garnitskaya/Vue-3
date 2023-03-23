<script setup>
</script>

<template>
  <div class="releases">
    <container
      class="releases__container"
      title="Релізи"
      :link="{ href: 'releases', label: 'Всі релізи' }"
      id="releases"
    >
      <div class="releases__wrap">
        <div class="releases__items">
          <a
            class="releases__item border-class"
            href="#"
            v-for="n in 6"
            :key="n"
          >
            <div class="releases__item-hover item">
              <div class="item__name">HELLO</div>
              <div class="item__years">(2019)</div>
            </div>

            <u-img :src="`/images/releases_${n}.png`" alt="releases" />
          </a>
        </div>
        <div class="releases__bnt btn">
          <button class="btn__left">
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
          <button class="btn__right">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1351_2248)">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="white"
                  fill-opacity="0.6"
                />
                <path
                  d="M12 25.334L21 16.334L12 7.33398"
                  stroke="#2D2D2D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1351_2248">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0 32) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </container>
  </div>
</template>



<style lang="scss" >
.releases {
  &__container {
    @media (max-width: 1024px) {
      padding: 0 !important;
    }
  }
  &__wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  &__items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    @media (max-width: 1024px) {
      justify-content: center;
    }
    @media (max-width: 480px) {
      gap: 16px;
    }
  }

  &__item {
    position: relative;
    flex: 0 0 176px;
    height: 176px;
    @media (max-width: 992px) {
      flex: 0 0 160px;
      height: 160px;
    }

    .item {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.7);
      color: var(--white);
      opacity: 0;
      transition: 0.2s opacity;
      &:hover {
        opacity: 1;
      }
      &__name {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      &__years {
        font-family: "Noto Sans", sans-serif;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.6875rem;
      }
    }
  }

  .btn {
    display: none;

    @media (max-width: 1024px) {
      display: block;
    }

    &__left,
    &__right {
      position: absolute;
      background: none;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      left: 8px;
      transition: 0.4s;
      &:hover {
        scale: 1.2;
        > svg circle {
          fill-opacity: 1;
        }
      }
    }
    &__right {
      right: 8px;
      left: auto;
    }
  }
}
</style>