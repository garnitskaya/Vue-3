import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: () => ({
    products: [],
    product: {},
    isLoading: false,
    filter: "",
    cart: JSON.parse(localStorage.getItem("itemsCard")) || [],
    orderData: {
      contacts: JSON.parse(localStorage.getItem("contacts")) || {},
      delivery: localStorage.getItem("delivery") || "",
      pay: localStorage.getItem("pay") || "",
      order: JSON.parse(localStorage.getItem("itemsCard")) || [],
      promocode: localStorage.getItem("promocode") || null,
      privacyPolicy: localStorage.getItem("privacyPolicy") || "true",
    },
  }),
  getters: {
    products(state) {
      return state.products;
    },
    product(state) {
      return state.product;
    },
    cart(state) {
      return state.cart;
    },
    filter(state) {
      return state.filter;
    },
    isLoading(state) {
      return state.isLoading;
    },
    orderData(state) {
      return state.orderData;
    },
  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setFilterProducts(state, filter) {
      state.filter = filter;
    },
    setCart(state, product) {
      const findItem = state.cart.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (findItem) {
        findItem.quantity++;
      } else {
        state.cart.push(product);
      }
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    increment(state, index) {
      state.cart[index].quantity++;
    },
    decrement(state, index) {
      state.cart[index].quantity--;
    },
    setOrderData(state, data) {
      state.orderData = { ...state.orderData, ...data };
    },
    deleteCartData(state) {
      state.cart = [];
    },
    deleteOrderData(state) {
      state.orderData = {
        contacts: {},
        delivery: "",
        pay: "",
        order: [],
        promocode: null,
        privacyPolicy: "true",
      }
    },
  },
  actions: {
    async fetchingProducts({ commit }, filter) {
      try {
        commit("setLoading", true);
        const filterTitle =
          filter == "new" || filter == "sale"
            ? `status=${filter}`
            : `category=${filter}`;
        const response = await axios.get(
          `http://localhost:3000/products?${filter && filterTitle}`
        );
        commit("setProducts", response.data);
      } catch (error) {
        console.log("Ошибка", error.message);
      } finally {
        commit("setLoading", false);
      }
    },

    async fetchingProduct({ commit }, id) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        commit("setProduct", response.data);
      } catch (error) {
        console.log("Ошибка", error.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async sendOrder({ commit }, data) {
      try {
        commit("setLoading", true);
        const response = await axios.post(
          `http://localhost:3000/orders/`,
          data
        );
        console.log(response.data);
        commit("deleteCartData");
        commit("deleteOrderData");
      } catch (error) {
        console.log("Ошибка", error.message);
      } finally {
        commit("setLoading", false);
      }
    },
    addToCart({ commit }, item) {
      commit("setCart", item);
    },
    deleteFromCart({ commit }, index) {
      commit("removeFromCart", index);
    },
    decrementItem({ commit }, index) {
      commit("decrement", index);
    },
    incrementItem({ commit }, index) {
      commit("increment", index);
    },
    orderData({ commit }, data) {
      commit("setOrderData", data);
    },
  },
});

export default store;
