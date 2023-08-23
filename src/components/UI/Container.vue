<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "container",
  props: {
    title: {
      type: String,
      required: false,
    },
    link: {
      type: Object,
      required: false,
    },
    external: {
      type: Boolean,
      required: false,
    },
    mb: {
      type: Number,
      //default: 32,
    },
    small: {
      type: Boolean,
      required: false,
    },
    left: {
      type: Boolean,
      required: false,
    },
  },
  setup() {},
});
</script>

<template>
  <div :class="['container', { 'container-small': small }]">
    <h2
      v-show="title"
      :style="{ 'margin-bottom': `${mb}px` }"
      :class="['container__title', { 'container__title-left': left }]"
    >
      {{ title }}
    </h2>
    <slot />
    <div v-if="link" class="container__block">
      <a
        v-if="external"
        class="container__link"
        :href="link.href"
        target="_blank"
      >
        {{ link.label }}
      </a>
      <router-link
        v-else
        class="container__link"
        :to="link.href"
        target="_blank"
      >
        {{ link.label }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  max-width: calc(1176px + 30px);
  padding: 0 15px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 28px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
  &-small {
    max-width: calc(576px + 30px);
    @media (max-width: 768px) {
      max-width: calc(528px + 30px);
    }
  }
  &__title {
    margin-bottom: 32px;
    font-size: 1.875rem;
    line-height: 2.625rem;
    text-align: center;
    &-left {
      margin-bottom: 24px;
      text-align: left;
      font-size: 1.25rem;
      line-height: 1.75rem;
      @media (max-width: 768px) {
        padding: 0 28px;
      }
      @media (max-width: 480px) {
        font-size: 1.375rem;
        line-height: 1.9375rem;
      }
    }
    @media (max-width: 768px) {
      margin-bottom: 28px !important;
    }
    @media (max-width: 480px) {
      margin-bottom: 24px !important;
      font-size: 1.5rem;
      line-height: 2.0625rem;
    }
  }

  &__block {
    text-align: center;
    margin: 28px 0 0 0;
    @media (max-width: 480px) {
      margin: 20px 0 0 0;
    }
  }

  &__link {
    display: inline-block;
    color: var(--black);
    font-size: 1rem;
    line-height: 1.375rem;
    border-bottom: 1px solid var(--black);
    transition: 0.2s all;
    &:hover {
      color: var(--red);
      border-color: var(--red);
    }
  }
}
</style>
