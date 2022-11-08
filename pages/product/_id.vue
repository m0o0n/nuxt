<template>
    <div>
        <h1>{{product.title.ru}}</h1>
    <span>{{product.description.ru}}</span>
    <span>Created: <p>{{product.created_at}}</p> </span>
    </div>
    
</template>

<script>


export default {
    // async asyncData({$axios, params}){
    //     const response = await $axios.$get('http://bk.armar.solutions/api/product/'+ params.id)
    //     return{product: response.data}
    // },
    async fetch(ctx){
        
        await ctx.store.dispatch('product/product/GetProduct', ctx.route.params.id)
    },
    
    data: () => ({

}),
computed: {
    product(){
            return this.$store.getters['product/product/GetProduct']
        }

    },

mounted() {
   
    console.log(this.product);
  },
}
</script>