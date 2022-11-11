<template>
  <div class="categories"> 
    <h1>Categories</h1>
    <div class="categories__container">
      <Aside ></Aside>
      <div class="categories__posts">
        <ProductCard
          v-for="category of categories"
          :key="category.slug"
          :item="category"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {

  async fetch(ctx) {
    if (ctx.store.getters['categories/categories/getCategories'].length === 0) {
      await ctx.store.dispatch('categories/categories/GET_ALL_CATEGORIES_ACTION');
    }
  },

  data: () => ({}),
  computed: {
    ...mapState({
      categories: state => state.categories.categories.categories,
    }),
  },
};
</script>

<style lang="scss" scoped>

.categories{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__container{
    display: flex;
  }
  
  &__posts{
  position: relative;
  display: flex;
  width: 800px;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
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
