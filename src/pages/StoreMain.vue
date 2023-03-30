<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import MerchItem from "@/components/MerchItem.vue";
import FiltersItem from "@/components/FiltersItem.vue";
import StoreWrap from "@/components/StoreWrap.vue";

const store = useStore();

const products = computed(() => store.state.products);
const filter = computed(() => store.state.filter);
const isLoading = computed(() => store.state.isLoading);

const filterChange = (name) => store.commit("setFilterProducts", name);

const fetchProducts = () => store.dispatch("fetchingProducts");

onMounted(() => {
  fetchProducts();
});

const filtersBtn = [
  { name: "new", label: "NEW" },
  { name: "sale", label: "SALE" },
  { name: "all", label: "ВСЕ" },
  { name: "candies", label: "ЦУКЕРКИ" },
  { name: "t-shirts", label: "ФУТБОЛКИ" },
  { name: "posters", label: "ПЛАКАТИ" },
  { name: "accessories", label: "АКСЕСУАРИ" },
];

//export default {
//  components: {
//    PostList,
//    PostForm,
//    Pagination,
//  },
//  setup() {
//    const store = useStore();

//    const dialogVisible = ref(false);

//    const setPage = (page) => {
//      store.commit("post/setPage", page);
//    };
//    const setSearchQuery = (query) => {
//      store.commit("post/setSearchQuery", query);
//    };
//    const setSelectedSort = (sort) => {
//      store.commit("post/setSelectedSort", sort);
//    };

//    const loadMorePosts = () => {
//      store.dispatch("post/loadMorePosts");
//    };
//    const fetchPosts = () => {
//      store.dispatch("post/fetchPosts");
//    };

//    const createPost = (post) => {
//      store.state.post.posts.push(post);
//      dialogVisible.value = false;
//    };
//    const removePost = (post) => {
//      store.state.post.posts = store.state.post.posts.filter(
//        (p) => p.id != post.id
//      );
//    };
//    const showDialog = () => {
//      dialogVisible.value = true;
//    };

//    const posts = computed(() => store.state.post.posts);
//    const isPostsLoading = computed(() => store.state.post.isPostsLoading);
//    const selectedSort = computed(() => store.state.post.selectedSort);
//    const searchQuery = computed(() => store.state.post.searchQuery);
//    const page = computed(() => store.state.post.page);
//    const limit = computed(() => store.state.post.limit);
//    const totalPages = computed(() => store.state.post.totalPages);
//    const sortOptions = computed(() => store.state.post.sortOptions);

//    const sortedPosts = computed(() => store.getters["post/sortedPosts"]);
//    const sortedAndSearchPosts = computed(
//      () => store.getters["post/sortedAndSearchPosts"]
//    );

//    onMounted(() => {
//      fetchPosts();
//    });

//    return {
//      dialogVisible,
//      setPage,
//      setSearchQuery,
//      setSelectedSort,
//      loadMorePosts,
//      createPost,
//      removePost,
//      showDialog,
//      posts,
//      isPostsLoading,
//      selectedSort,
//      searchQuery,
//      page,
//      limit,
//      totalPages,
//      sortOptions,
//      sortedPosts,
//      sortedAndSearchPosts,
//    };
//  },
//};
</script>

<template>
  <store-wrap>
    {{ query }}
    <a href="/" class="store__logo">
      <u-img src="/images/Antitela.png" alt="logo" />
    </a>
    <div>
      <filters-item
        styles="store"
        :filters="filtersBtn"
        :filter="filter"
        @changeFilter="filterChange"
      />
    </div>
    <div v-if="!isLoading" class="store__content">
      <merch-item v-for="item in products" :key="item" :item="item" />
    </div>
    <h3 v-else>Загрузка...</h3>
  </store-wrap>
</template>

<style lang="scss" scoped>
.store {
  &__logo {
    width: 100%;
    height: auto;
    max-width: 376px;
    align-self: center;
    @media (max-width: 768px) {
      max-width: 345px;
    }
    @media (max-width: 480px) {
      max-width: 160px;
    }
  }
  &__content {
    width: 100%;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 276px);
    justify-content: center;
    gap: 24px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      & > :nth-child(odd) {
        justify-self: end;
      }
    }
    @media (max-width: 480px) {
      gap: 24px 16px;
    }
  }
}
</style>