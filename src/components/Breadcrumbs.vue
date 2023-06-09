<script setup>
  import { computed, ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'

  const { getters } = useStore()
  const product = computed(() => getters.product)

  const breadcrumbs = computed(() => ({
    store: 'Мерч',
    cart: 'Повернутись до покупок',
    [`store/${product.value?.id}`]: product.value?.title,
  }))

  const route = useRoute()
  const links = ref([])

  const updateLinks = () => {
    const routePaths = route.path.split('/').filter((path) => path)

    links.value = routePaths.reduce((acc, curPath, i) => {
      const prevPath = acc[i - 1]
      const link = prevPath ? `${prevPath}/${curPath}` : curPath
      return [...acc, link]
    }, [])

    const keys = Object.keys(route.query)
    keys.forEach((key) => {
      const value = route.query[key]
      links.value.push(`${key}=${value}`)
    })
  }

  onMounted(() => updateLinks())

  watch(
    () => product.value.id,
    () => updateLinks()
  )
</script>

<template>
  <div class="breadcrumbs">
    <router-link
      to="/"
      class="breadcrumbs__link"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z"
          stroke="#989898"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.75 16.5V9H11.25V16.5"
          stroke="#989898"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </router-link>

    <span
      class="breadcrumbs__link"
      v-for="link in links"
      :key="link"
    >
      <svg
        class="separator"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.625 11.25L9.375 7.5L5.625 3.75"
          stroke="#989898"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <router-link
        v-if="link === 'cart'"
        :to="'/store'"
      >
        {{ breadcrumbs[link] }}
      </router-link>

      <router-link
        v-else
        :to="'/' + link"
      >
        {{ breadcrumbs[link] }}
      </router-link>
    </span>
  </div>
</template>

<style lang="scss" scoped>
  .breadcrumbs {
    margin-top: 24px;
    display: flex;
    align-items: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: var(--grey-dark);
    &__link {
      display: flex;
      align-items: center;
    }
    .separator {
      margin: 0 4px;
    }
  }
</style>
