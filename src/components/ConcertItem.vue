<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="item">
    <div class="item__date">
      {{ item.date[0] }} <span>{{ item.date[1] }}</span>
    </div>
    <div class="item__info">
      {{ item.city }}
      <span>{{ item.place }}</span>
    </div>

    <u-button class="item__btn" v-if="item.active" styles="red">
      Квитки
    </u-button>
    <u-button class="item__btn" v-else-if="item.canceled" styles="outlined">
      Відмінено
    </u-button>
    <u-button class="item__btn" v-else-if="item.delayed" styles="outlined">
      Перенесено
    </u-button>
    <u-button class="item__btn" v-else-if="!item.active" styles="warning">
      SOLD OUT
    </u-button>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: 174px 1fr auto;
  @media (max-width: 576px) {
    grid-template-columns: 150px 1fr auto;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr auto;
  }
  &__date {
    font-weight: 300;
    font-size: 1.625rem;
    line-height: 1.375rem;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.25rem;
    }
  }

  &__info {
    font-weight: 300;
    font-size: 1.375rem;
    line-height: 1.875rem;
    @media (max-width: 480px) {
      margin-top: 4px;
      grid-row: 2/ 3;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    span {
      display: block;
      font-weight: 200;
      font-size: 1rem;
      line-height: 1.4375rem;
    }
  }
  &__btn {
    align-self: center;
    @media (max-width: 480px) {
      grid-column: 2/ 3;
      grid-row: 1/ 3;
    }
  }
}
</style>
