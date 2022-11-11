<template>
  <div>
    <h1>{{ product.title }}</h1>
    <span>{{ product.description }}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  async fetch(ctx) {
    await ctx.store.dispatch(
    'product/product/GET_PRODUCT_ACTION',
    ctx.route.params.slug,
    );
    if (ctx.store.getters['categories/categories/getCategories'].length === 0) {
      await ctx.store.dispatch('categories/categories/GET_ALL_CATEGORIES_ACTION');
    }
    console.log(ctx.route.params.id)
  },
  
  data: () => ({}),
  computed: {
    ...mapState({
      product: state => state.product.product.product,
    }),
  },
};
</script>
