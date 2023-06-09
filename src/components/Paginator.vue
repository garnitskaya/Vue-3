<script setup>
import { computed, ref, onMounted, watch } from "vue";

const props = defineProps({
  totalCount: {
    type: Number,
    required: true,
  },
});

const pageSize = ref(10);
const currentPage = ref(1);
const pagesToShow = ref([]);

const pagesCount = computed(() => Math.ceil(props.totalCount / pageSize.value));
const isFirstPage = computed(() => currentPage.value <= 1);
const isLastPage = computed(() => currentPage.value >= pagesCount.value);

const pages = Array.from({ length: pagesCount.value }, (_, i) => i + 1);

const handlePrevbtn = () => (currentPage.value -= 1);
const handleNextbtn = () => (currentPage.value += 1);

const generatePages = () => {
  let tempPages = [];
  let curPageValue = currentPage.value;

  let dotsLeft = "... ";
  let dotsRight = " ...";

  if (curPageValue >= 1 && curPageValue <= 5) {
    tempPages = [1, 2, 3, 4, 5, dotsRight, pages.length];
    //
  } else if (curPageValue > 5 && curPageValue < pages.length - 2) {
    const sliced = pages.slice(curPageValue - 1, curPageValue + 1);
    tempPages = [1, dotsLeft, ...sliced, dotsRight, pages.length];
    //
  } else if (curPageValue > pages.length - 3) {
    const sliced = pages.slice(pages.length - 5);
    tempPages = [1, dotsLeft, ...sliced];
    //
  } else if (curPageValue === dotsRight) {
    curPageValue = pagesToShow.value[3] + 1;
    //
  } else if (curPageValue === dotsLeft) {
    curPageValue = pagesToShow.value[3] - 2;
  }

  pagesToShow.value = [...tempPages];
};

onMounted(() => {
  generatePages();
});

watch(currentPage, generatePages);
</script>


<template>
  <div class="paginator">
    <div class="paginator__wrap">
      <button
        @click="handlePrevbtn"
        class="paginator__btn-prev"
        :disabled="isFirstPage"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8125 4.375L7.1875 10L12.8125 15.625"
            stroke="#2D2D2D"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="paginator__numbers">
        <button
          @click="currentPage = page"
          v-for="page in pagesToShow"
          :key="page"
          :class="['paginator__number', { active: currentPage === page }]"
        >
          {{ page }}
        </button>
      </div>
      <button
        @click="handleNextbtn"
        class="paginator__btn-next"
        :disabled="isLastPage"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.1875 15.625L12.8125 10L7.1875 4.375"
            stroke="#2D2D2D"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.paginator {
  margin-top: 28px;
  display: flex;
  justify-content: center;

  &__wrap {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__btn-prev,
  &__btn-next {
    background: none;
    cursor: pointer;

    &:disabled svg path {
      stroke: var(--grey-dark);
    }
  }

  &__numbers {
    display: flex;
    gap: 24px;
  }

  &__number {
    background: none;
    font-family: var(--special-font);
    font-size: 0.875rem;
    line-height: 1.3125rem;
    cursor: pointer;

    &.active {
      color: var(--grey-dark);
    }
  }
}
</style>
