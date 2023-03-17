<script setup>
import { ref } from "vue";
import Container from "@/components/UI/Container.vue";
import UImg from "@/components/UI/UImg.vue";

const arrPhotos = [
  {
    id: 1,
    text: "Тур Hello, Харків - 07.06.2019",
  },
  {
    id: 2,
    text: "Тур Hello, Львів - 25.05.2019",
  },
  {
    id: 3,
    text: "Тур HELLO, Київ - 16.11.2019",
  },
];
</script>

<template>
  <div class="releases-block">
    <container title="Релізи" :link="{ href: '#', label: 'Всі релізи' }">
      <div class="releases-block__items">
        <a
          class="releases-block__item border-class"
          href="#"
          v-for="n in 6"
          :key="n"
        >
          <div class="releases-block__item-hover elements">
            <div class="elements__name">HELLO</div>
            <div class="elements__years">(2019)</div>
          </div>

          <u-img :src="`/images/releases_${n}.png`" alt="releases" />
        </a>
      </div>
    </container>

    <container
      title="Відео"
      :link="{
        href: 'https://www.youtube.com/@ANTYTILA/videos',
        label: 'Більше відео на YouTube',
      }"
    >
      <div class="releases-block__videos videos">
        <div class="videos__wrap border-class" v-for="n in 5" :key="n">
          <video class="videos__item" :poster="`/images/video_${n}.jpg`">
            <source type="video/mp4" src="" />
          </video>
          <svg
            class="videos__icon"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M60.1085 17.1203C59.7917 15.8548 59.1466 14.6952 58.2383 13.7587C57.3299 12.8223 56.1905 12.1422 54.9352 11.787C50.3485 10.667 32.0018 10.667 32.0018 10.667C32.0018 10.667 13.6552 10.667 9.06852 11.8937C7.81318 12.2488 6.67379 12.929 5.76544 13.8654C4.85709 14.8019 4.21195 15.9614 3.89518 17.227C3.05576 21.8818 2.64515 26.6038 2.66852 31.3337C2.63859 36.0991 3.04923 40.8571 3.89518 45.547C4.24441 46.7733 4.904 47.8887 5.81023 48.7856C6.71647 49.6825 7.8387 50.3305 9.06852 50.667C13.6552 51.8937 32.0018 51.8937 32.0018 51.8937C32.0018 51.8937 50.3485 51.8937 54.9352 50.667C56.1905 50.3118 57.3299 49.6317 58.2383 48.6952C59.1466 47.7588 59.7917 46.5992 60.1085 45.3337C60.9415 40.7139 61.3521 36.0279 61.3352 31.3337C61.3651 26.5682 60.9545 21.8102 60.1085 17.1203Z"
              fill="black"
            />
            <path
              d="M26 40.0533L41.3333 31.3333L26 22.6133V40.0533Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </container>

    <container title="Фото" :link="{ href: '#', label: 'Всі фото' }">
      <div class="releases-block__photos photos">
        <div
          class="photos__wrap border-class"
          v-for="item in arrPhotos"
          :key="item.id"
        >
          <u-img :src="`/images/photo_${item.id}.jpg`" alt="photo" />
          <p class="photos__title">
            {{ item.text }}
          </p>
        </div>
      </div>
    </container>
  </div>
</template>



<style lang="scss" scoped>
.releases-block {
  padding: 48px 0;
  & > div:not(:last-child) {
    margin-bottom: 48px;
  }
  &__items {
    display: flex;
    justify-content: space-between;
  }

  &__item {
    position: relative;
    width: 176px;
    height: 176px;
  }
  .elements {
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

  .videos {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    > :not(:nth-child(1)),
    > :not(:nth-child(2)) {
      flex: calc(100% / 3 - 24px * 2 / 3);
      min-height: 211px;
    }
    > :nth-child(1),
    > :nth-child(2) {
      flex: 1 1 calc(100% / 2 - 24px / 2);
      min-height: 324px;
    }
    &__wrap {
      position: relative;
      transition: 0.4s opacity;

      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }

    &__item {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    &__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 64px;
      height: 64px;
    }
  }
  .photos {
    max-height: 450px;
    display: grid;
    grid-template: repeat(2, 1fr) / 66% 1fr;
    gap: 24px;
    & :first-child {
      grid-row: 1/ 3;
    }
    &__wrap {
      position: relative;
      max-height: 450px;
    }

    &__title {
      width: 100%;
      position: absolute;
      bottom: 16px;
      font-family: "Open Sans";
      font-size: 16px;
      line-height: 23px;
      color: var(--white);
      text-align: center;
    }
  }
}
</style>