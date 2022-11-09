<template>
  <div>
    <h1>Categories</h1>
    <div class="categories">
      <Aside />
      <div class="postsContainer">
        <ProductCard />
        <div
          class="productCard"
          v-for="category of categories"
          :key="category.id"
        >
          <nuxt-link :to="/categories/ + category.id">{{
            category.title.ru
          }}</nuxt-link>
          <span>{{ category.description.ru }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({ store }) {
    if (store.getters['categories/categories/getCategories'].length === 0) {
      await store.dispatch('categories/categories/GET_ALL_CATEGORIES_ACTION');
    }
  },

  data: () => ({
    products: [],
  }),
  computed: {
    ...mapState({
      categories: state => state.categories.categories.categories,
    }),
  },
};
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
}
.productCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 15px;
  margin-bottom: 10px;
}
</style>
