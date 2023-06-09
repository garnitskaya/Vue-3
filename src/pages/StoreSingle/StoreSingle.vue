<script setup>
  import { computed, ref, onMounted, watch } from 'vue'
  import { useStore } from 'vuex'
  import SocialLink from '@/components/SocialLink.vue'
  import StatusItem from '@/components/StatusItem.vue'
  import StoreWrap from '@/components/StoreWrap.vue'
  import MerchBlock from '@/components/MerchBlock.vue'
  import Skeleton from './Skeleton.vue'

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })
  const size = ref('l')
  const { getters, dispatch } = useStore()

  const product = computed(() => getters.product)
  const isLoading = computed(() => getters.isLoading)

  const fetchProduct = (id) => dispatch('fetchingProduct', id)

  const onAddItems = () => {
    let item
    if ('size' in product.value) {
      item = { ...product.value, quantity: 1, size: size.value }
    } else {
      item = { ...product.value, quantity: 1 }
    }
    dispatch('addToCart', item)
  }

  onMounted(() => {
    fetchProduct(props.id)
  })

  watch(
    () => props.id,
    () => fetchProduct(props.id)
  )
</script>

<template>
  <store-wrap>
    <div
      v-if="!isLoading"
      class="item__wrap"
    >
      <status-item
        :position="0"
        v-if="product.status"
        :color="product.status === 'new' ? '#59AD02' : '#FF1E00'"
      >
        {{ product.status }}
      </status-item>

      <div class="item__img">
        <u-img
          :src="`/images/magnets_${product.image}`"
          :alt="product.title"
        />
      </div>
      <div class="item__block">
        <div class="item__name">{{ product.title }}</div>
        <div class="item__price">
          <span :class="{ 'item__price-old': product.newPrice }"> {{ product.price }} ₴ </span>
          <span
            v-if="product.newPrice"
            class="item__price-new"
          >
            {{ product.newPrice }} ₴
          </span>
        </div>
        <div
          v-if="product.composition"
          class="item__composition"
        >
          Склад: {{ product.composition }}
        </div>
        <div
          v-if="product.density"
          class="item__density"
        >
          Щільність: {{ product.density }}
        </div>
        <div
          v-if="product.size"
          class="item__size size"
        >
          Розмір:
          <div class="size__items">
            <span
              @click="size = s"
              :class="['size__item', { active: size === s }]"
              v-for="s in product.size"
              :key="s"
            >
              {{ s }}
            </span>
          </div>
        </div>
        <u-button
          @addItems="onAddItems"
          class="item__btn"
          size="big"
          styles="red"
        >
          Додати у кошик
        </u-button>
        <div class="item__social">
          Поділитися:
          <social-link
            v-for="link in [{ name: 'facebook' }, { name: 'twitter' }, { name: 'shareSocial' }]"
            :key="link.name"
            :link="link"
            fill="#2D2D2D"
          />
        </div>
        <a
          class="item__shipping"
          href="#"
        >
          Способи доставки та безкоштовна доставка
        </a>
        <a
          class="item__payment"
          href="#"
        >
          Способи оплати
        </a>
      </div>
    </div>
    <skeleton v-else />
  </store-wrap>
  <merch-block
    class="merch-block"
    left
    title="Вам також може сподобатися:"
  />
</template>

<style lang="scss" scoped>
  .item {
    &__wrap {
      max-width: 100%;
      position: relative;
      margin-top: 48px;
      display: flex;
      gap: 123px;

      @media (max-width: 992px) {
        gap: 24px;
      }

      @media (max-width: 768px) {
        margin-top: 40px;
      }

      @media (max-width: 576px) {
        margin-top: 24px;
        flex-direction: column;
        align-items: center;
        align-self: center;
      }
    }

    &__img {
      width: 476px;
      height: 100%;
      max-height: 491px;

      @media (max-width: 992px) {
        width: 344px;
      }

      @media (max-width: 768px) {
        flex: 1;
      }

      @media (max-width: 576px) {
        width: 336px;
      }
    }

    &__block {
      flex: 1;
      font-family: var(--special-font);
      font-size: 0.875rem;
      line-height: 1.3125rem;
      display: flex;
      flex-direction: column;
      gap: 12px;

      @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.4375rem;
        gap: 8px;
      }

      @media (max-width: 480px) {
        gap: 12px;
      }
    }

    &__name {
      font-family: var(--body-font);
      font-size: 1.875rem;
      line-height: 2.625rem;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        line-height: 2.0625rem;
      }
    }

    &__price {
      font-family: var(--body-font);
      font-size: 1.5rem;
      line-height: 2.0625rem;

      @media (max-width: 576px) {
        font-size: 1.125rem;
        line-height: 1.5625rem;
      }

      &-new {
        margin: 0 0 0 5px;
      }

      &-old {
        font-size: 1.0625rem;
        line-height: 1.5rem;
        font-weight: 300;
        text-decoration: line-through;
        color: var(--grey-dark);

        @media (max-width: 576px) {
          font-size: 0.875rem;
          line-height: 1.1875rem;
        }
      }
    }

    &__size {
      margin: 0 0 4px 0;

      .size {
        &__items {
          margin: 8px 0 0 0;
          display: flex;
          gap: 24px;
        }

        &__item {
          cursor: pointer;
          text-transform: uppercase;

          &.active {
            color: var(--red);
          }
        }
      }
    }

    &__btn {
      @media (max-width: 768px) {
        width: 252px !important;
      }

      @media (max-width: 576px) {
        width: 100% !important;
      }
    }

    &__social {
      margin: 14px 0 0 0;
      display: flex;
      align-items: center;

      & > :first-child {
        margin-left: 8px;
      }

      & > :not(:first-child) {
        margin-left: 24px;

        @media (max-width: 768px) {
          margin-left: 16px;
        }
      }
    }

    &__shipping,
    &__payment {
      margin: 12px 0 0 0;
      padding: 0 0 0 35px;
      background: url('/icons/truck.svg') 0 0 no-repeat;
      text-decoration-line: underline;

      @media (max-width: 768px) {
        margin: 8px 0 0 0;
      }
    }

    &__payment {
      margin: 8px 0 0 0;
      background-image: url('/icons/card.svg');

      @media (max-width: 768px) {
        margin: 4px 0 0 0;
      }
    }
  }

  .merch-block {
    padding-bottom: 0;
  }
</style>
