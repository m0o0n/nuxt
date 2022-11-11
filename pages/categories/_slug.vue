<template>
  <div>

    <h1>{{ category.title }}</h1>
    <span>{{ category.description }}</span>
    <div>
      <h2>Products</h2>
      <div v-for="product of category.products" :key="product.slug">
        <h3>
          <nuxt-link :to="/product/ + product.slug">{{
            product.title
          }}</nuxt-link>
        </h3>
        <span>{{ product.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  async fetch(ctx) {
    await ctx.store.dispatch(
      'category/category/GET_CATEGORY_ACTION',
      ctx.route.params.slug,
    );
    if (ctx.store.getters['categories/categories/getCategories'].length === 0) {
      await ctx.store.dispatch('categories/categories/GET_ALL_CATEGORIES_ACTION');
    }
  },
  data: () => ({}),
  computed: {
    ...mapState({
      category: state => state.category.category.category,
    }),
  },
};
</script>
