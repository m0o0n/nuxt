<template>
  <div>Hi</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      GET_ALL_CATEGORIES_ACTION: 'categories/categories/GET_ALL_CATEGORIES_ACTION'
    })
  },
  data: () => ({}),
  mounted() {
    this.GET_ALL_CATEGORIES_ACTION()
  }
  
 
};
</script>
