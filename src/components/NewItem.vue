<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const text = ref(props.item.text);
const newText = computed(() => {
  return text.value.length > 60
    ? text.value.slice(0, 60) + "[...]"
    : text.value;
});
</script>

<template>
  <div class="item">
    <div class="item__wrap border-class">
      <u-img
        class="item__img"
        :src="`/images/new_${item.id}.jpg`"
        :alt="item.title"
      />
    </div>
    <div class="item__title">{{ item.title }}</div>
    <div class="item__text">
      {{ newText }}
    </div>
    <div class="item__block">
      <div class="item__data">{{ item.data }}</div>
      <u-button
        styles="outlined"
        size="small"
        @click="$router.push('/news/' + item.id)"
      >
        Читати далі
      </u-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  max-height: 351px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    max-height: max-content;
  }
  &__wrap {
    height: 186px;
    @media (max-width: 768px) {
      height: 232px;
    }
  }
  &__title {
    margin-top: 16px;
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.5625rem;

    @media (max-width: 480px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
  &__text {
    flex: 1;
    margin-top: 4px;
    font-family: var(--special-font);
    font-size: 0.875rem;
    line-height: 1.3125rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4375rem;
    }
  }
  &__block {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin-top: 14px;
    }
  }
  &__data {
    font-family: var(--special-font);
    font-size: 0.75rem;
    line-height: 1.3125rem;
    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
}
</style>
