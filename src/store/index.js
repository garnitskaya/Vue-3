import { createStore } from 'vuex'
import axios from "axios"

const store = createStore({
  state: () => ({
    products: [],
    product: {},
    isLoading: false,
    filter: 'all'
  }),
  getters: {
    getProduct(state) {
      return state.product
    }
  },
  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setFilterProducts(state, filter) {
      state.filter = filter
    }
  },
  actions: {
    async fetchingProducts({ commit }) {
      try {
        commit('setLoading', true)
        const response = await axios.get("http://localhost:3000/products");
        commit('setProducts', response.data)
      } catch (error) {
        console.log("Ошибка", error.message);
      } finally {
        commit('setLoading', false)
      }
    },

    async fetchingProduct({ commit }, id) {
      try {
        commit('setLoading', true)
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        console.log(response.data)
        commit('setProduct', response.data)
      } catch (error) {
        console.log("Ошибка", error.message);
      } finally {
        commit('setLoading', false)
      }
    }
  },
})

export default store