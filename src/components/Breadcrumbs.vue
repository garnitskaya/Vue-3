<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const breadcrumbs = {
  store: "Мерч",
  "store/:id": "????",
};

const props = defineProps({});

const route = useRoute();
const links = ref([]);

//const links = computed(() => {
//  const route = useRoute();
//  const matched = route.matched;

//  return matched.map((match, index) => {
//    const to = matched
//      .slice(0, index + 1)
//      .map((m) => m.path)
//      .join("/");
//    const name = match.meta.breadcrumb || match.meta.title;
//    console.log(name, to);
//    return { to, name };
//  });
//});

const updateLinks = () => {
  const routePaths = route.path.split("/").filter((path) => path);

  // Если маршрут пустой, добавляем ссылку на главную страницу
  //if (routePaths.length === 0) {
  //  links.value = [];
  //  return;
  //}

  // Если маршрут не пустой, строим список ссылок на основе текущего маршрута
  links.value = routePaths.reduce((acc, curPath, i) => {
    const prevPath = acc[i - 1];
    const link = prevPath ? `${prevPath}/${curPath}` : curPath;
    return [...acc, link];
  }, []);
};
// Вызываем метод при инициализации компонента и при изменении маршрута
onMounted(() => updateLinks());
//route && route.path && updateLinks();
</script>

<template>
  <div class="breadcrumbs">
    <router-link to="/" class="breadcrumbs__link">
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

    <span class="breadcrumbs__link" v-for="link in links" :key="link">
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

      <router-link :to="'/' + link">
        {{ breadcrumbs[link] || "config array" }}
      </router-link>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  margin-top: 24px;
  display: flex;
  align-items: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
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