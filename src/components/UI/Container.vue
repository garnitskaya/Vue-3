<script setup>
const props = defineProps({
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
    default: 32,
  },
});
</script>

<template>
  <div class="container">
    <h2
      v-if="title"
      :style="{ 'margin-bottom': `${mb}px` }"
      class="container__title"
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
  max-width: calc(1176px + 30px);
  padding: 0 15px;
  margin: 0 auto;

  &__title {
    /*margin: 0 0 32px 0;*/
    font-size: 1.875rem;
    line-height: 2.625rem;
    text-align: center;
  }

  &__block {
    text-align: center;
    margin: 28px 0 0 0;
  }

  &__link {
    display: inline-block;
    color: var(--black);
    font-size: 1.14rem;
    line-height: 1.57rem;
    border-bottom: 1px solid var(--black);
    transition: 0.2s all;
    &:hover {
      color: var(--red);
      border-color: var(--red);
    }
  }
}
</style>