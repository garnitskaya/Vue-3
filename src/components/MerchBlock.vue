<script setup>
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import MerchItem from '@/components/MerchItem/MerchItem.vue'
  import ButtonArrow from '@/components/ButtonArrow.vue'
  import Skeleton from '@/components/MerchItem/Skeleton.vue'

  const props = defineProps({
    link: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: false,
    },
    left: {
      type: Boolean,
      required: false,
    },
  })

  const { getters, dispatch } = useStore()
  const products = computed(() => getters.products)
  const isLoading = computed(() => getters.isLoading)
  const fetchProducts = () => dispatch('fetchingProducts')

  onMounted(() => {
    fetchProducts()
  })
</script>

<template>
  <div
    class="merch-block wrap-content"
    :style="{ background: !bg && 'none' }"
    id="merch"
  >
    <container
      :left="left"
      class="merch-block__container"
      :title="title || 'Мерч'"
      :link="link ? { href: '/store', label: 'Переглянути весь мерч' } : null"
    >
      <div class="merch-block__wrap">
        <div class="merch-block__items">
          <merch-item
            v-if="!isLoading"
            class="merch-block__item"
            v-for="item in products.slice(0, 4)"
            :key="item"
            :item="item"
          />

          <skeleton
            v-else
            v-for="item in 4"
          />
        </div>
        <div class="merch-block__bnt btn-arrow">
          <button-arrow styles="left" />
          <button-arrow styles="right" />
        </div>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
  .merch-block {
    background: var(--bg-grey);
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
      gap: 24px;
      @media (max-width: 1024px) {
        justify-content: center;
      }
      @media (max-width: 576px) {
        gap: 16px;
      }
    }
    &__item {
      flex: 1;
      @media (max-width: 992px) {
        flex: 0 0 276px;
      }
      @media (max-width: 480px) {
        flex: 0 0 160px;
      }
    }
  }
</style>
