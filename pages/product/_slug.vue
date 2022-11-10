<template>
  <div>
    <h1>{{ product.title }}</h1>
    <span>{{ product.description }}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      GET_ALL_CATEGORIES_ACTION: 'categories/categories/GET_ALL_CATEGORIES_ACTION',
      GET_PRODUCT_ACTION: 'product/product/GET_PRODUCT_ACTION'
    })
  },

  data: () => ({}),
  computed: {
    ...mapState({
      product: state => state.product.product.product,
    }),
  },

  mounted(){
    this.GET_PRODUCT_ACTION(this.$route.params.slug)
    this.GET_ALL_CATEGORIES_ACTION()
  }
};
</script>
