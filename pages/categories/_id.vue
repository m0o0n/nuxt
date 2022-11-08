<template>
  <div>
    <h1>{{ category.title.ru }}</h1>
    <span>{{ category.description.ru }}</span>
    <div>
      <h2>Products</h2>
      <div v-for="product of category.products" :key="product.id">
        <h3>
          <a href="#" @click.prevent="openProduct(product)">{{
            product.title.ru
          }}</a>
        </h3>
        <span>{{ product.description.ru }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  async fetch(ctx) {
    await ctx.store.dispatch(
      'category/category/GET_CATEGORY_ACTION',
      ctx.route.params.id,
    );
  },
  data: () => ({}),
  computed: {
    ...mapState({
      category: state => state.category.category.category,
    }),
  },
  methods: {
    openProduct(product) {
      this.$router.push('/product/' + product.id);
    },
  },
};
</script>
