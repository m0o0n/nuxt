<template>
  <div>Hi</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async fetch(ctx) {
    if (ctx.store.getters['categories/categories/getCategories'].length === 0) {
      await ctx.store.dispatch('categories/categories/GET_ALL_CATEGORIES_ACTION');
    }
  },
  data: () => ({}),
 
};
</script>
