<template>
  <div>
    <h1>{{ product.title.ru }}</h1>
    <span>{{ product.description.ru }}</span>
    <span
      >Created:
      <p>{{ product.created_at }}</p>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  async fetch(ctx) {
    await ctx.store.dispatch(
      'product/product/GET_PRODUCT_ACTION',
      ctx.route.params.id,
    );
  },

  data: () => ({}),
  computed: {
    ...mapState({
      product: state => state.product.product.product,
    }),
  },
};
</script>
