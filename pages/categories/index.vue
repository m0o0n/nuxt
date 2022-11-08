<template>
  <div>
    <h1>Categories</h1>
    <div class="postsContainer">
      <div
        class="productCard"
        v-for="category of categories"
        :key="category.id"
      >
        <a href="#" @click.prevent="openCategory(category)">{{
          category.title.ru
        }}</a>
        <span>{{ category.description.ru }}</span>
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
  methods: {
    openCategory(category) {
      this.$router.push('/categories/' + category.id);
    },
  },
};
</script>

<style>
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
