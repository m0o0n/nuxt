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
  methods: {
    ...mapActions({
      GET_ALL_CATEGORIES_ACTION: 'categories/categories/GET_ALL_CATEGORIES_ACTION',
      GET_CATEGORY_ACTION: 'category/category/GET_CATEGORY_ACTION',
    }),
  },
  data: () => ({}),
  computed: {
    ...mapState({
      category: state => state.category.category.category,
    }),
  },
  mounted(){
    this.GET_ALL_CATEGORIES_ACTION(),
    this.GET_CATEGORY_ACTION(this.$route.params.slug)
  }
};
</script>
